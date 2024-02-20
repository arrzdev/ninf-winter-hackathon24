"use server"

const kkdata = [
  {
    "date": "01/02/2024",
    "id": "65d21eb601ca5b41509ae6a6",
    "products": [
      {
        "name": "TAB CNT  AVELAS INTEIRAS 100G",
        "price": 0.99,
        "quantity": 1
      },
      {
        "name": "CACETINHO RUSTICO 140G",
        "price": 0.92,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 1.09
  },
  {
    "date": "03/02/2024",
    "id": "65d21eb601ca5b41509ae6a7",
    "products": [
      {
        "name": "COOKIES CHIPS AHOY MINI 160G",
        "price": 1.69,
        "quantity": 1
      },
      {
        "name": "AGUA S/GAS CONTINENTE 1L",
        "price": 0.26,
        "quantity": 2.0
      },
      {
        "name": "PK MERENDA MISTA 4 UN",
        "price": 2.29,
        "quantity": 1
      },
      {
        "name": "PK MERENDA MISTA 4 UN",
        "price": 2.29,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 6.79
  },
  {
    "date": "06/12/2023",
    "id": "65d21eb601ca5b41509ae6a8",
    "products": [
      {
        "name": "MERENDA MISTA C&B",
        "price": 0.69,
        "quantity": 2.0
      },
      {
        "name": "\u00c1GUA PINGO DOCE 1,5L",
        "price": 0.28,
        "quantity": 1
      },
      {
        "name": "COMPAL VITAL EQ MANG",
        "price": 0.84,
        "quantity": 1
      }
    ],
    "store": "pingo-doce",
    "total": 2.33
  },
  {
    "date": "07/12/2023",
    "id": "65d21eb601ca5b41509ae6a9",
    "products": [
      {
        "name": "MERENDA MISTA C&B",
        "price": 0.69,
        "quantity": 1.0
      },
      {
        "name": "\u00c1GUA PINGO DOCE 1,5L",
        "price": 0.28,
        "quantity": 1
      }
    ],
    "store": "pingo-doce",
    "total": 0.97
  },
  {
    "date": "12/02/2024",
    "id": "65d21eb601ca5b41509ae6aa",
    "products": [
      {
        "name": "ATUM POSTA EM AZEITE CNT 85G",
        "price": 1.15,
        "quantity": 3.0
      },
      {
        "name": "SNACK BATATA CAMPONESA LAY S FO",
        "price": 1.49,
        "quantity": 1
      },
      {
        "name": "BOLACHA CREAMS 440G",
        "price": 1.99,
        "quantity": 1
      },
      {
        "name": "CERV.C/ALC.SUPER BOCK LATA 50",
        "price": 0.79,
        "quantity": 1
      },
      {
        "name": "OVOS SOLO L CONTINENTE 1/2DZ",
        "price": 1.48,
        "quantity": 1
      },
      {
        "name": "CR LACT MATINAL EXTRA LIGHT 200",
        "price": 1.89,
        "quantity": 2.0
      },
      {
        "name": "CHAMPO PANTENE AQUALIGHT 225ML",
        "price": 2.99,
        "quantity": 1
      },
      {
        "name": "TIRAS DE BACON FUMADO CNT 150 G",
        "price": 1.65,
        "quantity": 1
      },
      {
        "name": "ALHEIRA MIRANDELA IGP SELECCAO",
        "price": 1.19,
        "quantity": 1
      },
      {
        "name": "SALADA CLASSICA CNT EMB.175GR",
        "price": 1.04,
        "quantity": 1
      },
      {
        "name": "PK MERENDA MISTA 4 UN",
        "price": 2.29,
        "quantity": 1
      },
      {
        "name": "PIZZA ROMANA CNT 415G",
        "price": 2.49,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 24.63
  },
  {
    "date": "13/02/2024",
    "id": "65d21eb601ca5b41509ae6ab",
    "products": [
      {
        "name": "SNACKS BATATAS LONG CHIPS ORIGI",
        "price": 1.19,
        "quantity": 1
      },
      {
        "name": "AGUA S/GAS CONTINENTE 1L",
        "price": 0.26,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 1.45
  },
  {
    "date": "13/02/2024",
    "id": "65d21eb601ca5b41509ae6ac",
    "products": [
      {
        "name": "ICED TEA CONTINENTE MANGA 20CL",
        "price": 0.25,
        "quantity": 1
      },
      {
        "name": "BEB ENERG COCO ANANAS GUAPA",
        "price": 0.95,
        "quantity": 1
      },
      {
        "name": "SANDES PASTA DE FRANGO CZ CNT",
        "price": 2.49,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 3.69
  },
  {
    "date": "14/01/2024",
    "id": "65d21eb601ca5b41509ae6ad",
    "products": [
      {
        "name": "SALSICHA FRANKFURT CNT 10U 250G",
        "price": 1.19,
        "quantity": 1
      },
      {
        "name": "ATUM POSTA EM AZEITE CNT 85G",
        "price": 1.15,
        "quantity": 4.0
      },
      {
        "name": "DEO ANTI ODOR CONTINENTE 150ML",
        "price": 1.89,
        "quantity": 1
      },
      {
        "name": "ROLO COZ CNT 4=8",
        "price": 1.95,
        "quantity": 1
      },
      {
        "name": "SACOS LIXO CONTINENTE 30UN",
        "price": 0.89,
        "quantity": 1
      },
      {
        "name": "NUGGETS FRANGO CONTINENTE 30 UN",
        "price": 3.99,
        "quantity": 1
      },
      {
        "name": "OVOS DE SOLO CLASSE L CNT 1DZ",
        "price": 2.48,
        "quantity": 1
      },
      {
        "name": "CR LACT MATINAL EXTRA LIGHT 200",
        "price": 1.84,
        "quantity": 2.0
      },
      {
        "name": "LEITE UHT M/G GRESSO 1L (ROSCA)",
        "price": 0.83,
        "quantity": 1
      },
      {
        "name": "ARROZ CAROLINO CONTINENTE 1KG",
        "price": 1.37,
        "quantity": 1
      },
      {
        "name": "ALHEIRA LAMEGO CNT 200G",
        "price": 1.55,
        "quantity": 1
      },
      {
        "name": "BANANA CAT I CNT KG",
        "price": 1.18,
        "quantity": 1
      },
      {
        "name": "SALADA CAMPONESA CNT 250GR",
        "price": 1.39,
        "quantity": 1
      },
      {
        "name": "PK MERENDA MISTA 4 UN",
        "price": 2.29,
        "quantity": 1
      },
      {
        "name": "PAO DE FORMA C/CODEA CNT 820GR",
        "price": 1.35,
        "quantity": 1
      },
      {
        "name": "LASANHA BOLONHESA 1KG",
        "price": 4.49,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 30.6
  },
  {
    "date": "14/02/2024",
    "id": "65d21eb601ca5b41509ae6ae",
    "products": [
      {
        "name": "BOLACHA CREAMS 440G",
        "price": 1.79,
        "quantity": 1
      },
      {
        "name": "AGUA S/GAS CONTINENTE 1L",
        "price": 0.26,
        "quantity": 1
      },
      {
        "name": "PAO DE FORMA C/CODEA CNT 820GR",
        "price": 1.43,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 3.48
  },
  {
    "date": "15/02/2024",
    "id": "65d21eb601ca5b41509ae6af",
    "products": [
      {
        "name": "SNACK SUNBITES SAL MARINHO95G",
        "price": 1.04,
        "quantity": 1
      },
      {
        "name": "NECTAR  COMPALVITAL ANA/COCO 1L",
        "price": 1.19,
        "quantity": 1
      },
      {
        "name": "CACETINHO RUSTICO 140G",
        "price": 0.46,
        "quantity": 1
      },
      {
        "name": "LASANHA BOLONHESA 1KG",
        "price": 4.49,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 7.18
  },
  {
    "date": "15/12/2023",
    "id": "65d21eb601ca5b41509ae6b0",
    "products": [
      {
        "name": "ARG CH NEG PD 150G",
        "price": 0.79,
        "quantity": 1
      }
    ],
    "store": "pingo-doce",
    "total": 0.79
  },
  {
    "date": "17/12/2023",
    "id": "65d21eb601ca5b41509ae6b1",
    "products": [
      {
        "name": "SNACK BAT ORIG PRINGL 175G",
        "price": 2.39,
        "quantity": 1
      },
      {
        "name": "NECTAR  COMPALVITAL ANA/COCO 1L",
        "price": 1.35,
        "quantity": 1
      },
      {
        "name": "PAO DE FORMA C/CODEA CNT 820GR",
        "price": 1.35,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 5.09
  },
  {
    "date": "22/01/2024",
    "id": "65d21eb601ca5b41509ae6b2",
    "products": [
      {
        "name": "BOLACHA CREAMS 440G",
        "price": 1.99,
        "quantity": 1
      },
      {
        "name": "PK MERENDA MISTA 4 UN",
        "price": 2.29,
        "quantity": 1
      },
      {
        "name": "PAO FORMA FAMILIAR BIMBO 700G",
        "price": 1.98,
        "quantity": 1
      },
      {
        "name": "CONJ 3 RECARGAS DESUMID 450GR C",
        "price": 5.99,
        "quantity": 1
      },
      {
        "name": "SACO PLAS RE CNT",
        "price": 0.1,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 12.35
  },
  {
    "date": "22/12/2023",
    "id": "65d21eb601ca5b41509ae6b3",
    "products": [
      {
        "name": "OLD SPICE DEO STICK NIGHTPANTHE",
        "price": 2.99,
        "quantity": 1
      },
      {
        "name": "CROQUETES ALHEIRA CONT.SELECCAO",
        "price": 3.49,
        "quantity": 1
      },
      {
        "name": "CROQ CARNE CNT POUP FORNO 384G",
        "price": 2.99,
        "quantity": 1
      },
      {
        "name": "PAST BACALHAU GOUR. FORN RIBERA",
        "price": 4.99,
        "quantity": 1
      },
      {
        "name": "MORCELA ARROZ FUNDAO CNT 200G",
        "price": 2.09,
        "quantity": 1
      },
      {
        "name": "ALHEIRA CACA CNT",
        "price": 1.89,
        "quantity": 1
      },
      {
        "name": "SALAME CHOC C/AMENDOA",
        "price": 2.99,
        "quantity": 1
      },
      {
        "name": "OVOS MOLES 250G",
        "price": 4.82,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 26.25
  },
  {
    "date": "22/12/2023",
    "id": "65d21eb601ca5b41509ae6b4",
    "products": [
      {
        "name": "SNAC BAT NATAS&CEBOLA PRINGL 17",
        "price": 2.39,
        "quantity": 1
      },
      {
        "name": "SNACK BAT ORIG PRINGL 175G",
        "price": 2.39,
        "quantity": 2.0
      },
      {
        "name": "PIZZA ROMANA CNT 415G",
        "price": 2.49,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 9.66
  },
  {
    "date": "24/01/2024",
    "id": "65d21eb601ca5b41509ae6b5",
    "products": [
      {
        "name": "ARG CH BRANC PD 128G",
        "price": 0.85,
        "quantity": 1
      },
      {
        "name": "COM.100% F.MAC\u00c3 33",
        "price": 0.84,
        "quantity": 1
      }
    ],
    "store": "pingo-doce",
    "total": 1.52
  },
  {
    "date": "25/01/2024",
    "id": "65d21eb601ca5b41509ae6b6",
    "products": [
      {
        "name": "AGUA S/GAS VITALIS 1.5L",
        "price": 0.43,
        "quantity": 1
      },
      {
        "name": "MERENDA MISTA PACK 2 UN (LAB)",
        "price": 1.38,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 1.81
  },
  {
    "date": "25/01/2024",
    "id": "65d21eb601ca5b41509ae6b7",
    "products": [
      {
        "name": "BAT FRIT RUFFLE PRESUNTO 150G",
        "price": 1.39,
        "quantity": 1
      },
      {
        "name": "LEITE UHT M/G GRESSO 1L (ROSCA)",
        "price": 0.84,
        "quantity": 1
      },
      {
        "name": "TOMATE CHUCHA CNT KG",
        "price": 2.63,
        "quantity": 0.535
      }
    ],
    "store": "continente",
    "total": 3.64
  },
  {
    "date": "26/01/2024",
    "id": "65d21eb601ca5b41509ae6b8",
    "products": [
      {
        "name": "MERENDA MISTA PACK 2 UN (LAB)",
        "price": 1.38,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 1.38
  },
  {
    "date": "26/01/2024",
    "id": "65d21eb601ca5b41509ae6b9",
    "products": [
      {
        "name": "CEREAIS CHOCO CROCKERS CNT 500G",
        "price": 2.29,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 2.29
  },
  {
    "date": "27/01/2024",
    "id": "65d21eb601ca5b41509ae6ba",
    "products": [
      {
        "name": "SNACK BAT PAPRIKA PRINGL 175G",
        "price": 2.39,
        "quantity": 1
      },
      {
        "name": "BOLACHA CREAMS 440G",
        "price": 1.99,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 4.38
  },
  {
    "date": "30/01/2024",
    "id": "65d21eb601ca5b41509ae6bb",
    "products": [
      {
        "name": "BAT FRIT LISA CONTINENTE 200G",
        "price": 1.25,
        "quantity": 1
      },
      {
        "name": "ALHO MOIDO CONTINENTE FRS 55G",
        "price": 0.69,
        "quantity": 1
      },
      {
        "name": "NECTAR  COMPALVITAL ANA/COCO 1L",
        "price": 1.69,
        "quantity": 1
      },
      {
        "name": "CERV.C/ALC.SUPER BOCK LATA 33",
        "price": 0.64,
        "quantity": 1
      },
      {
        "name": "PORCO BIFANAS - LS",
        "price": 1.85,
        "quantity": 1
      },
      {
        "name": "CARCACA PORTUGUESA 80G",
        "price": 0.6,
        "quantity": 1
      },
      {
        "name": "PAO DE FORMA C/CODEA CNT 820GR",
        "price": 1.43,
        "quantity": 1
      }
    ],
    "store": "continente",
    "total": 7.58
  }
]

export const getReceipts = async () => {

  return kkdata

  // try {
  //   var receipt = await fetch("http://192.168.233.232:5000/receipts");
  // } catch (error) {
  //   console.error(error);
  //   return [];
  // }

  // let res = await receipt.json();
  // return res;
}

export const getReceiptData = async (slug: string) => {

  //find in kk data the entry with slug
  return kkdata.find((entry) => entry.id === slug)

  // try {
  //   var receipt = await fetch(`http://192.168.233.232:5000/receipts/${slug}`);
  // } catch (error) {
  //   console.error(error);
  //   return [];
  // }

  // let res = await receipt.json();
  // return res;

}