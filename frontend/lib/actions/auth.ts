"use server";

import db from "@/lib/database/connect"; 
import { User } from "@prisma/client";
import { IBackendError } from "@/lib/types";

import { SignJWT, jwtVerify } from "jose";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

var bcrypt = require('bcryptjs');

interface ICredentials {
  username: string;
  password: string;
}

interface IJwtTokenData {
  userId: string;
  role: User["role"];
}

//basic auth functions
export const signIn = async (credentials: ICredentials): Promise<IBackendError | void> => {
  const { username, password } = credentials;

  try {
    //search by username
    var possibleUser = await db.user.findUnique({
      where: {
        username
      }
    })

    if (!possibleUser || !bcrypt.compareSync(password, possibleUser.password)) {
      return {
        status: "error",
        message: "Incorrect username or password",
      }
    }
  } catch (e){
    console.log(e) //add real logging for later debug
    return {
      status: "error",
      message: "Some internal problem caused an error while trying to log you in"
    }
  }
  
  // create session for the user
  await createSession(possibleUser);
}

export const signUp = async (credentials: ICredentials): Promise<IBackendError | void> => {
  const { username, password } = credentials

  try {
    //check if the username is already in use
    const user = await db.user.findUnique({
      where: {
        username
      }
    })
  
    if (user) {
      return {
        status: "error",
        message: "Username already in use",
      }
    }
  
    //hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
  
    //store user in db
    var newUser = await db.user.create({
      data: {
        username,
        password: hashedPassword
      }
    })
  } catch (e){
    console.log(e) //add real logging for later debug
    return {
      status: "error",
      message: "Some internal problem caused an error while trying to log you in"
    }
  }
  
  //create session for the recently created user
  await createSession(newUser);
}

export const logOut = () => {
  //remove the session cookie
  cookies().delete("polar-bear")
  redirect("/login");
}

//create and get session
const createSession = async (user: User) => {
  //get the jwt secret used to sign the token
  const jwtSecret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY);

  //define wich data will be stored in the token
  const tokenData = {
    userId: user.id,
    role: user.role
  }

  const jwtToken = await new SignJWT(tokenData)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("3600s")
    .sign(jwtSecret);

  //set the session cookie
  cookies().set({
    name: "polar-bear",
    value: jwtToken,
    path: "/",
  })

  //get the callback path
  const referer = headers().get('referer')?.split("?")[1]
  const urlParams = new URLSearchParams(referer)

  const loginCallback = urlParams.get("callback") || "/" 
  redirect(loginCallback);
}

export const getSession = async (): Promise<IJwtTokenData | false> => {
  const jwtCookie = cookies().get("polar-bear");

  // cookie does not exist
  if (!jwtCookie) {
    return false;
  }

  const jwtToken = jwtCookie.value;
  const jwtSecret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY);

  try {
    var { payload } = await jwtVerify(jwtToken, jwtSecret)
  }
  catch (err) {
    // token has invalid signature
    return false;
  }

  const session = {
    userId: payload.userId as User["id"],
    role: payload.role as User["role"]
  }

  return session;
}

export const isAdmin = (userSession: IJwtTokenData):boolean => {
  if (userSession.role == "admin") return true;
  return false;
}