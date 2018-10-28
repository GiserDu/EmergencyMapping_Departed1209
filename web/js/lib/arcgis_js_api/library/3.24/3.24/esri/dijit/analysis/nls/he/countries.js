// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/he/countries",{countryCodes:{WORLD:"\u05e2\u05d5\u05dc\u05dd",AD:"\u05d0\u05e0\u05d3\u05d5\u05e8\u05d4",AE:"\u05d0\u05d9\u05d7\u05d5\u05d3 \u05d4\u05d0\u05de\u05d9\u05e8\u05d5\u05d9\u05d5\u05ea \u05d4\u05e2\u05e8\u05d1\u05d9\u05d5\u05ea",AF:"\u05d0\u05e4\u05d2\u05e0\u05d9\u05e1\u05d8\u05df",AG:"\u05d0\u05e0\u05d8\u05d9\u05d2\u05d5\u05d0\u05d4 \u05d5\u05d1\u05e8\u05d1\u05d5\u05d3\u05d4",AI:"\u05d0\u05e0\u05d2\u05d5\u05d5\u05d9\u05dc\u05d4",AL:"\u05d0\u05dc\u05d1\u05e0\u05d9\u05d4",
AM:"\u05d0\u05e8\u05de\u05e0\u05d9\u05d4",AO:"\u05d0\u05e0\u05d2\u05d5\u05dc\u05d4",AQ:"\u05d0\u05e0\u05d8\u05d0\u05e8\u05e7\u05d8\u05d9\u05e7\u05d4",AR:"\u05d0\u05e8\u05d2\u05e0\u05d8\u05d9\u05e0\u05d4",AS:"\u05e1\u05de\u05d5\u05d0\u05d4 \u05d4\u05d0\u05de\u05e8\u05d9\u05e7\u05d0\u05d9\u05ea",AT:"\u05d0\u05d5\u05e1\u05d8\u05e8\u05d9\u05d4",AU:"\u05d0\u05d5\u05e1\u05d8\u05e8\u05dc\u05d9\u05d4",AW:"\u05d0\u05e8\u05d5\u05d1\u05d4",AZ:"\u05d0\u05d6\u05e8\u05d1\u05d9\u05d9\u05d2\u05d0\u05df",BA:"\u05d1\u05d5\u05e1\u05e0\u05d9\u05d4 \u05d5\u05d4\u05e8\u05e6\u05d2\u05d5\u05d1\u05d9\u05e0\u05d4",
BB:"\u05d1\u05e8\u05d1\u05d3\u05d5\u05e1",BD:"\u05d1\u05e0\u05d2\u05dc\u05d3\u05e9",BE:"\u05d1\u05dc\u05d2\u05d9\u05d4",BF:"\u05d1\u05d5\u05e8\u05e7\u05d9\u05e0\u05d4 \u05e4\u05d0\u05e1\u05d5",BG:"\u05d1\u05d5\u05dc\u05d2\u05e8\u05d9\u05d4",BH:"\u05d1\u05d7\u05e8\u05d9\u05d9\u05df",BI:"\u05d1\u05d5\u05e8\u05d5\u05e0\u05d3\u05d9",BJ:"\u05d1\u05e0\u05d9\u05df",BL:"\u05e1\u05df \u05d1\u05e8\u05ea\u05dc\u05de\u05d9",BM:"\u05d1\u05e8\u05de\u05d5\u05d3\u05d4",BN:"\u05d1\u05e8\u05d5\u05e0\u05d9\u05d9 \u05d3\u05e8\u05d5\u05e1\u05dc\u05d0\u05dd",
BO:"\u05d1\u05d5\u05dc\u05d9\u05d1\u05d9\u05d4",BQ:"\u05d1\u05d5\u05e0\u05d0\u05d9\u05d9\u05e8, \u05e1\u05e0\u05d8 \u05d0\u05d5\u05e1\u05d8\u05ea\u05d9\u05d5\u05e1 \u05d5\u05e1\u05d0\u05d1\u05d4",BR:"\u05d1\u05e8\u05d6\u05d9\u05dc",BS:"\u05d1\u05d4\u05d0\u05de\u05d4",BT:"\u05d1\u05d4\u05d5\u05d8\u05df",BV:"\u05d4\u05d0\u05d9 \u05d1\u05d5\u05d5\u05d4",BW:"\u05d1\u05d5\u05d8\u05e1\u05d5\u05d5\u05d0\u05e0\u05d4",BY:"\u05d1\u05dc\u05d0\u05e8\u05d5\u05e1",BZ:"\u05d1\u05dc\u05d9\u05d6",CA:"\u05e7\u05e0\u05d3\u05d4",
CD:"\u05d4\u05e8\u05e4\u05d5\u05d1\u05dc\u05d9\u05e7\u05d4 \u05d4\u05d3\u05de\u05d5\u05e7\u05e8\u05d8\u05d9\u05ea \u05e9\u05dc \u05e7\u05d5\u05e0\u05d2\u05d5",CF:"\u05d4\u05e8\u05e4\u05d5\u05d1\u05dc\u05d9\u05e7\u05d4 \u05d4\u05de\u05e8\u05db\u05d6 \u05d0\u05e4\u05e8\u05d9\u05e7\u05d0\u05d9\u05ea",CG:"\u05e7\u05d5\u05e0\u05d2\u05d5",CH:"\u05e9\u05d5\u05d5\u05d9\u05e5",CI:"\u05d7\u05d5\u05e3 \u05d4\u05e9\u05e0\u05d4\u05d1",CK:"\u05d0\u05d9\u05d9 \u05e7\u05d5\u05e7",CL:"\u05e6'\u05d9\u05dc\u05d4",CM:"\u05e7\u05de\u05e8\u05d5\u05df",
CN:"\u05e1\u05d9\u05df",CO:"\u05e7\u05d5\u05dc\u05d5\u05de\u05d1\u05d9\u05d4",CR:"\u05e7\u05d5\u05e1\u05d8\u05d4 \u05e8\u05d9\u05e7\u05d4",CU:"\u05e7\u05d5\u05d1\u05d4",CV:"\u05db\u05e3 \u05d5\u05e8\u05d3\u05d4",CW:"\u05e7\u05d5\u05e8\u05d0\u05e1\u05d0\u05d5",CY:"\u05e7\u05e4\u05e8\u05d9\u05e1\u05d9\u05df",CZ:"\u05d4\u05e8\u05e4\u05d5\u05d1\u05dc\u05d9\u05e7\u05d4 \u05d4\u05e6'\u05db\u05d9\u05ea",DE:"\u05d2\u05e8\u05de\u05e0\u05d9\u05d4",DJ:"\u05d2'\u05d9\u05d1\u05d5\u05d8\u05d9",DK:"\u05d3\u05e0\u05de\u05e8\u05e7",
DM:"\u05d3\u05d5\u05de\u05d9\u05e0\u05d9\u05e7\u05d4",DO:"\u05d4\u05e8\u05e4\u05d5\u05d1\u05dc\u05d9\u05e7\u05d4 \u05d4\u05d3\u05d5\u05de\u05d9\u05e0\u05d9\u05e7\u05e0\u05d9\u05ea",DZ:"\u05d0\u05dc\u05d2'\u05d9\u05e8\u05d9\u05d4",EC:"\u05d0\u05e7\u05d5\u05d5\u05d3\u05d5\u05e8",EE:"\u05d0\u05e1\u05d8\u05d5\u05e0\u05d9\u05d4",EG:"\u05de\u05e6\u05e8\u05d9\u05dd",EH:"\u05e1\u05d4\u05e8\u05d4 \u05d4\u05de\u05e2\u05e8\u05d1\u05d9\u05ea",ER:"\u05d0\u05e8\u05d9\u05ea\u05e8\u05d9\u05d0\u05d4",ES:"\u05e1\u05e4\u05e8\u05d3",
ET:"\u05d0\u05ea\u05d9\u05d5\u05e4\u05d9\u05d4",FI:"\u05e4\u05d9\u05e0\u05dc\u05e0\u05d3",FJ:"\u05e4\u05d9\u05d2'\u05d9",FK:"\u05d0\u05d9\u05d9 \u05e4\u05d5\u05e7\u05dc\u05e0\u05d3 (\u05de\u05dc\u05d1\u05d9\u05e0\u05d0\u05e1)",FM:"\u05de\u05d9\u05e7\u05e8\u05d5\u05e0\u05d6\u05d9\u05d4",FO:"\u05d0\u05d9\u05d9 \u05e4\u05d0\u05e8\u05d5",FR:"\u05e6\u05e8\u05e4\u05ea",GA:"\u05d2\u05d1\u05d5\u05df",GB:"\u05d1\u05e8\u05d9\u05d8\u05e0\u05d9\u05d4",GD:"\u05d2\u05e8\u05e0\u05d3\u05d4",GE:"\u05d2\u05d9\u05d0\u05d5\u05e8\u05d2\u05d9\u05d4",
GF:"\u05d2\u05d9\u05e0\u05d9\u05d0\u05d4 \u05d4\u05e6\u05e8\u05e4\u05ea\u05d9\u05ea",GG:"\u05d2\u05e8\u05e0\u05d6\u05d9",GH:"\u05d2\u05d0\u05e0\u05d4",GI:"\u05d2\u05d9\u05d1\u05e8\u05dc\u05d8\u05e8",GL:"\u05d2\u05e8\u05d9\u05e0\u05dc\u05e0\u05d3",GM:"\u05d2\u05de\u05d1\u05d9\u05d4",GN:"\u05d2\u05d9\u05e0\u05d0\u05d4",GP:"\u05d2\u05d5\u05d5\u05d0\u05d3\u05dc\u05d5\u05e4\u05d4",GQ:"\u05d2\u05d9\u05e0\u05d0\u05d4 \u05d4\u05de\u05e9\u05d5\u05d5\u05e0\u05d9\u05ea",GR:"\u05d9\u05d5\u05d5\u05df",GS:"\u05d3\u05e8\u05d5\u05dd \u05d2\u05d0\u05d5\u05e8\u05d2\u05d9\u05d4 \u05d5\u05d0\u05d9\u05d9 \u05d4\u05e1\u05e0\u05d3\u05d5\u05d5\u05d9\u05e5 \u05d4\u05d3\u05e8\u05d5\u05de\u05d9\u05d9\u05dd",
GT:"\u05d2\u05d5\u05d5\u05d8\u05de\u05dc\u05d4",GW:"\u05d2\u05d9\u05e0\u05d0\u05d4-\u05d1\u05d9\u05e1\u05d0\u05d5",GY:"\u05d2\u05d9\u05d0\u05e0\u05d4",HK:"\u05d4\u05d5\u05e0\u05d2 \u05e7\u05d5\u05e0\u05d2",HM:"\u05d4\u05d0\u05d9 \u05d4\u05e8\u05d3 \u05d5\u05d0\u05d9\u05d9 \u05de\u05e7\u05d3\u05d5\u05e0\u05dc\u05d3",HN:"\u05d4\u05d5\u05e0\u05d3\u05d5\u05e8\u05e1",HR:"\u05e7\u05e8\u05d5\u05d0\u05d8\u05d9\u05d4",HT:"\u05d4\u05d0\u05d9\u05d8\u05d9",HU:"\u05d4\u05d5\u05e0\u05d2\u05e8\u05d9\u05d4",ID:"\u05d0\u05d9\u05e0\u05d3\u05d5\u05e0\u05d6\u05d9\u05d4",
IE:"\u05d0\u05d9\u05e8\u05dc\u05e0\u05d3",IL:"\u05d9\u05e9\u05e8\u05d0\u05dc",IM:"\u05d0\u05d9\u05d9 \u05de\u05d0\u05df",IN:"\u05d4\u05d5\u05d3\u05d5",IO:"\u05d4\u05d8\u05e8\u05d9\u05d8\u05d5\u05e8\u05d9\u05d4 \u05d4\u05d1\u05e8\u05d9\u05d8\u05d9\u05ea \u05d1\u05d0\u05d5\u05e7\u05d9\u05d9\u05e0\u05d5\u05e1 \u05d4\u05d4\u05d5\u05d3\u05d9",IQ:"\u05e2\u05d9\u05e8\u05e7",IR:"\u05d0\u05d9\u05e8\u05d0\u05df",IS:"\u05d0\u05d9\u05e1\u05dc\u05e0\u05d3",IT:"\u05d0\u05d9\u05d8\u05dc\u05d9\u05d4",JE:"\u05d2'\u05e8\u05e1\u05d9",
JM:"\u05d2'\u05de\u05d9\u05d9\u05e7\u05d4",JO:"\u05d9\u05e8\u05d3\u05df",JP:"\u05d9\u05e4\u05df",KE:"\u05e7\u05e0\u05d9\u05d4",KG:"\u05e7\u05d9\u05e8\u05d2\u05d9\u05d6\u05e1\u05d8\u05df",KH:"\u05e7\u05de\u05d1\u05d5\u05d3\u05d9\u05d4",KI:"\u05e7\u05d9\u05e8\u05d9\u05d1\u05d8\u05d9",KM:"\u05e7\u05d5\u05de\u05d5\u05e8\u05d5",KN:"\u05e1\u05e0\u05d8 \u05e7\u05d9\u05d8\u05e1 \u05d5\u05e0\u05d5\u05d5\u05d9\u05e1",KP:"\u05e6\u05e4\u05d5\u05df \u05e7\u05d5\u05e8\u05d9\u05d0\u05d4",KR:"\u05e7\u05d5\u05e8\u05d9\u05d0\u05d4 \u05d4\u05e6\u05e4\u05d5\u05e0\u05d9\u05ea",
KW:"\u05db\u05d5\u05d5\u05d9\u05ea",KY:"\u05d0\u05d9\u05d9 \u05e7\u05d9\u05d9\u05de\u05df",KZ:"\u05e7\u05d6\u05d7\u05e1\u05d8\u05d0\u05df",LA:"\u05dc\u05d0\u05d5\u05e1",LB:"\u05dc\u05d1\u05e0\u05d5\u05df",LC:"\u05e1\u05e0\u05d8 \u05dc\u05d5\u05e1\u05d9\u05d4",LI:"\u05dc\u05d9\u05db\u05d8\u05e0\u05e9\u05d8\u05d9\u05d9\u05df",LK:"\u05e1\u05e8\u05d9 \u05dc\u05e0\u05e7\u05d4",LR:"\u05dc\u05d9\u05d1\u05e8\u05d9\u05d4",LS:"\u05dc\u05e1\u05d5\u05d8\u05d5",LT:"\u05dc\u05d9\u05d8\u05d0",LU:"\u05dc\u05d5\u05e7\u05e1\u05de\u05d1\u05d5\u05e8\u05d2",
LV:"\u05dc\u05d8\u05d1\u05d9\u05d4",LY:"\u05dc\u05d5\u05d1",MA:"\u05de\u05e8\u05d5\u05e7\u05d5",MC:"\u05de\u05d5\u05e0\u05e7\u05d5",MD:"\u05de\u05d5\u05dc\u05d3\u05d5\u05d1\u05d4",ME:"\u05de\u05d5\u05e0\u05d8\u05e0\u05d2\u05e8\u05d5",MF:"\u05e1\u05d9\u05d9\u05e0\u05d8 \u05de\u05e8\u05d8\u05d9\u05df (\u05d4\u05d7\u05dc\u05e7 \u05d4\u05e6\u05e8\u05e4\u05ea\u05d9)",MG:"\u05de\u05d3\u05d2\u05e1\u05e7\u05e8",MH:"\u05d0\u05d9\u05d9 \u05de\u05e8\u05e9\u05dc",MK:"\u05de\u05e7\u05d3\u05d5\u05e0\u05d9\u05d4",
ML:"\u05de\u05d0\u05dc\u05d9",MM:"\u05de\u05d9\u05d0\u05e0\u05de\u05e8",MN:"\u05de\u05d5\u05e0\u05d2\u05d5\u05dc\u05d9\u05d4",MO:"\u05de\u05e7\u05d0\u05d5",MP:"\u05d0\u05d9\u05d9 \u05de\u05e8\u05d9\u05d0\u05e0\u05d4 \u05d4\u05e6\u05e4\u05d5\u05e0\u05d9\u05d9\u05dd",MQ:"\u05de\u05e8\u05d8\u05d9\u05e0\u05d9\u05e7",MR:"\u05de\u05d0\u05d5\u05e8\u05d9\u05d8\u05e0\u05d9\u05d4",MS:"\u05de\u05d5\u05e0\u05d8\u05e1\u05e8\u05d0\u05d8",MT:"\u05de\u05dc\u05d8\u05d4",MU:"\u05de\u05d0\u05d5\u05e8\u05d9\u05e6\u05d9\u05d5\u05e1",
MV:"\u05d4\u05d0\u05d9\u05d9\u05dd \u05d4\u05de\u05dc\u05d3\u05d9\u05d1\u05d9\u05d9\u05dd",MW:"\u05de\u05dc\u05d0\u05d5\u05d5\u05d9",MX:"\u05de\u05e7\u05e1\u05d9\u05e7\u05d5",MY:"\u05de\u05dc\u05d6\u05d9\u05d4",MZ:"\u05de\u05d5\u05d6\u05de\u05d1\u05d9\u05e7",NA:"\u05e0\u05de\u05d9\u05d1\u05d9\u05d4",NC:"\u05e7\u05dc\u05d3\u05d5\u05e0\u05d9\u05d4 \u05d4\u05d7\u05d3\u05e9\u05d4",NE:"\u05e0\u05d9\u05d6'\u05e8",NG:"\u05e0\u05d9\u05d2\u05e8\u05d9\u05d4",NI:"\u05e0\u05d9\u05e7\u05e8\u05d2\u05d5\u05d0\u05d4",
NL:"\u05d4\u05d5\u05dc\u05e0\u05d3",NO:"\u05e0\u05d5\u05e8\u05d1\u05d2\u05d9\u05d4",NP:"\u05e0\u05e4\u05d0\u05dc",NR:"\u05e0\u05d0\u05d5\u05e8\u05d5",NU:"\u05e0\u05d9\u05d5\u05d0\u05d4",NZ:"\u05e0\u05d9\u05d5 \u05d6\u05d9\u05dc\u05e0\u05d3",OM:"\u05e2\u05d5\u05de\u05d0\u05df",PA:"\u05e4\u05e0\u05de\u05d4",PE:"\u05e4\u05e8\u05d5",PF:"\u05e4\u05d5\u05dc\u05d9\u05e0\u05d6\u05d9\u05d4 \u05d4\u05e6\u05e8\u05e4\u05ea\u05d9\u05ea",PG:"\u05e4\u05e4\u05d5\u05d0\u05d4 \u05d2\u05d9\u05e0\u05d0\u05d4 \u05d4\u05d7\u05d3\u05e9\u05d4",
PH:"\u05e4\u05d9\u05dc\u05d9\u05e4\u05d9\u05e0\u05d9\u05dd",PK:"\u05e4\u05e7\u05d9\u05e1\u05d8\u05df",PL:"\u05e4\u05d5\u05dc\u05d9\u05df",PM:"\u05e1\u05df \u05e4\u05d9\u05d9\u05e8 \u05d5\u05de\u05d9\u05e7\u05dc\u05d5\u05df",PN:"\u05e4\u05d9\u05d8\u05e7\u05e8\u05df",PS:"\u05d4\u05e8\u05e9\u05d5\u05ea \u05d4\u05e4\u05dc\u05e1\u05d8\u05d9\u05e0\u05d9\u05ea",PT:"\u05e4\u05d5\u05e8\u05d8\u05d5\u05d2\u05dc",PW:"\u05e4\u05dc\u05d0\u05d5",PY:"\u05e4\u05e8\u05d2\u05d5\u05d5\u05d0\u05d9",QA:"\u05e7\u05d8\u05d0\u05e8",
RE:"\u05e8\u05d0\u05d5\u05e0\u05d9\u05d5\u05df",RO:"\u05e8\u05d5\u05de\u05e0\u05d9\u05d4",RS:"\u05e1\u05e8\u05d1\u05d9\u05d4",RU:"\u05d4\u05e4\u05d3\u05e8\u05e6\u05d9\u05d4 \u05d4\u05e8\u05d5\u05e1\u05d9\u05ea",RW:"\u05e8\u05d5\u05d0\u05e0\u05d3\u05d4",SA:"\u05e2\u05e8\u05d1 \u05d4\u05e1\u05e2\u05d5\u05d3\u05d9\u05ea",SB:"\u05d0\u05d9\u05d9 \u05e9\u05dc\u05de\u05d4",SC:"\u05d0\u05d9\u05d9 \u05e1\u05d9\u05d9\u05e9\u05dc",SD:"\u05e1\u05d5\u05d3\u05df",SE:"\u05e9\u05d5\u05d5\u05d3\u05d9\u05d4",SG:"\u05e1\u05d9\u05e0\u05d2\u05e4\u05d5\u05e8",
SH:"\u05e1\u05e0\u05d8 \u05d4\u05dc\u05e0\u05d4, \u05d0\u05e1\u05e0\u05e9\u05df \u05d5\u05d8\u05e8\u05d9\u05e1\u05d8\u05df \u05d3\u05d4 \u05e7\u05d5\u05e0\u05d4",SI:"\u05e1\u05dc\u05d5\u05d1\u05e0\u05d9\u05d4",SJ:"\u05e1\u05d5\u05d5\u05d0\u05dc\u05d1\u05e8\u05d3 \u05d5\u05d9\u05d0\u05df \u05de\u05d0\u05d9\u05d9\u05df",SK:"\u05e1\u05dc\u05d5\u05d1\u05e7\u05d9\u05d4",SL:"\u05e1\u05d9\u05d9\u05e8\u05d4 \u05dc\u05d0\u05d5\u05df",SM:"\u05e1\u05df \u05de\u05e8\u05d9\u05e0\u05d5",SN:"\u05e1\u05e0\u05d2\u05dc",
SO:"\u05e1\u05d5\u05de\u05dc\u05d9\u05d4",SR:"\u05e1\u05d5\u05e8\u05d9\u05e0\u05d0\u05dd",SS:"\u05d3\u05e8\u05d5\u05dd \u05e1\u05d5\u05d3\u05df",ST:"\u05e1\u05d0\u05d5 \u05d8\u05d5\u05de\u05d4 \u05d5\u05e4\u05e8\u05d9\u05e0\u05e1\u05d9\u05e4\u05d4",SV:"\u05d0\u05dc \u05e1\u05dc\u05d1\u05d3\u05d5\u05e8",SX:"\u05e1\u05d9\u05d9\u05e0\u05d8 \u05de\u05d0\u05e8\u05d8\u05df (\u05d4\u05d7\u05dc\u05e7 \u05d4\u05d4\u05d5\u05dc\u05e0\u05d3\u05d9)",SY:"\u05e1\u05d5\u05e8\u05d9\u05d4",SZ:"\u05e1\u05d5\u05d5\u05d0\u05d6\u05d9\u05dc\u05e0\u05d3",
TC:"\u05d0\u05d9\u05d9 \u05d8\u05d5\u05e8\u05e7 \u05d5\u05e7\u05d9\u05d9\u05e7\u05d5\u05e1",TD:"\u05e6'\u05d0\u05d3",TF:"\u05d4\u05d8\u05e8\u05d9\u05d8\u05d5\u05e8\u05d9\u05d5\u05ea \u05d4\u05d3\u05e8\u05d5\u05de\u05d9\u05d5\u05ea \u05e9\u05dc \u05e6\u05e8\u05e4\u05ea",TG:"\u05d8\u05d5\u05d2\u05d5",TH:"\u05ea\u05d0\u05d9\u05dc\u05e0\u05d3",TJ:"\u05d8\u05d2'\u05d9\u05e7\u05d9\u05e1\u05d8\u05df",TK:"\u05d8\u05d5\u05e7\u05dc\u05d0\u05d5",TL:"\u05de\u05d6\u05e8\u05d7 \u05d8\u05d9\u05de\u05d5\u05e8",TM:"\u05d8\u05d5\u05e8\u05e7\u05de\u05e0\u05d9\u05e1\u05d8\u05df",
TN:"\u05ea\u05d5\u05e0\u05d9\u05e1",TO:"\u05d8\u05d5\u05e0\u05d2\u05d4",TR:"\u05d8\u05d5\u05e8\u05e7\u05d9\u05d4",TT:"\u05d8\u05e8\u05d9\u05e0\u05d9\u05d3\u05d3 \u05d5\u05d8\u05d5\u05d1\u05d2\u05d5",TV:"\u05d8\u05d5\u05d1\u05d0\u05dc\u05d5",TW:"\u05d8\u05d0\u05d9\u05d5\u05d0\u05df, \u05e4\u05e8\u05d5\u05d1\u05d9\u05e0\u05e6\u05d9\u05d4 \u05e9\u05dc \u05e1\u05d9\u05df",TZ:"\u05d8\u05e0\u05d6\u05e0\u05d9\u05d4",UA:"\u05d0\u05d5\u05e7\u05e8\u05d0\u05d9\u05e0\u05d4",UG:"\u05d0\u05d5\u05d2\u05e0\u05d3\u05d4",
UM:"\u05d4\u05d0\u05d9\u05d9\u05dd \u05d4\u05de\u05e8\u05d5\u05d7\u05e7\u05d9\u05dd \u05d4\u05e7\u05d8\u05e0\u05d9\u05dd \u05e9\u05dc \u05d0\u05e8\u05e6\u05d5\u05ea \u05d4\u05d1\u05e8\u05d9\u05ea",US:"\u05d0\u05e8\u05e6\u05d5\u05ea \u05d4\u05d1\u05e8\u05d9\u05ea",UY:"\u05d0\u05d5\u05e8\u05d5\u05d2\u05d5\u05d5\u05d0\u05d9",UZ:"\u05d0\u05d5\u05d6\u05d1\u05e7\u05d9\u05e1\u05d8\u05df",VA:"\u05d4\u05db\u05e1 \u05d4\u05e7\u05d3\u05d5\u05e9 (\u05de\u05d3\u05d9\u05e0\u05ea \u05e2\u05d9\u05e8 \u05d5\u05ea\u05d9\u05e7\u05df)",
VC:"\u05e1\u05e0\u05d8 \u05d5\u05d9\u05e0\u05e1\u05e0\u05d8 \u05d5\u05d4\u05d2\u05e8\u05e0\u05d3\u05d9\u05e0\u05d9\u05dd",VE:"\u05d5\u05d5\u05e0\u05e6\u05d5\u05d0\u05dc\u05d4",VG:"\u05d0\u05d9\u05d9 \u05d4\u05d1\u05ea\u05d5\u05dc\u05d4 \u05d4\u05d1\u05e8\u05d9\u05d8\u05d9\u05d9\u05dd",VN:"\u05d5\u05d5\u05d9\u05d0\u05d8\u05e0\u05dd",VU:"\u05d5\u05e0\u05d5\u05d0\u05d8\u05d5",WF:"\u05d5\u05d0\u05dc\u05d9\u05e1 \u05d5\u05e4\u05d5\u05d8\u05d5\u05e0\u05d4",WS:"\u05e1\u05de\u05d5\u05d0\u05d4",XK:"\u05d4\u05e8\u05e4\u05d5\u05d1\u05dc\u05d9\u05e7\u05d4 \u05e9\u05dc \u05e7\u05d5\u05e1\u05d5\u05d1\u05d5",
YE:"\u05ea\u05d9\u05de\u05df",YT:"\u05de\u05d9\u05d5\u05d8",ZA:"\u05d3\u05e8\u05d5\u05dd \u05d0\u05e4\u05e8\u05d9\u05e7\u05d4",ZM:"\u05d6\u05de\u05d1\u05d9\u05d4",ZW:"\u05d6\u05d9\u05de\u05d1\u05d1\u05d5\u05d0\u05d4"}});