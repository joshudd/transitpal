type Trip = {
  start_location: string;
  end_location: string;
  start_time: number;
  end_time: number;
  distance: string;
  origin: string;
  desition: string;
  savings: string;
  emissions: string;
  date: number;
  legs: Leg[];
};
const split = parseFloat("27.4 mi".split(" ")[0])
const trip = {
  geocoded_waypoints: [
    {
      geocoder_status: "OK",
      place_id: "ChIJb6j7nCEx9ocRv8QJN4rvMKg",
      types: ["locality", "political"],
    },
    {
      geocoder_status: "OK",
      place_id: "ChIJ47dkAD4ts1IRQvFI-AS_l7Y",
      types: ["premise"],
    },
  ],
  routes: [
    {
      bounds: {
        northeast: {
          lat: 44.9753484,
          lng: -93.19748679999999,
        },
        southwest: {
          lat: 44.7207642,
          lng: -93.25972,
        },
      },
      copyrights: "Map data ©2023 Google",
      legs: [
        {
          arrival_time: {
            text: "6:43\u202fPM",
            time_zone: "America/Chicago",
            value: 1695512589,
          },
          departure_time: {
            text: "5:11\u202fPM",
            time_zone: "America/Chicago",
            value: 1695507060,
          },
          distance: {
            text: "27.4 mi",
            value: 44026,
          },
          duration: {
            text: "1 hour 32 mins",
            value: 5529,
          },
          end_address: "300 Washington Ave SE, Minneapolis, MN 55455, USA",
          end_location: {
            lat: 44.9731491,
            lng: -93.2353174,
          },
          start_address: "Apple Valley, MN 55124, USA",
          start_location: {
            lat: 44.725468,
            lng: -93.21757699999999,
          },
          steps: [
            {
              distance: {
                text: "15.1 mi",
                value: 24309,
              },
              duration: {
                text: "29 mins",
                value: 1748,
              },
              end_location: {
                lat: 44.855279,
                lng: -93.23285899999999,
              },
              html_instructions: "Bus towards Mall of America",
              polyline: {
                points:
                  "em~oGzp}wPjDz@|JAnA?vB?zD@?o@Aa@CiAASMy@Qu@sBeGe@`@{AnAKHKFKHMDKDMDIBE@K@K@M@O?U?_B@yA?K?yB?@v@@vC?d@?pA}@?{@?}D?qA?W?wAAuA?uBAsB@A?{@AiCCi@AaA?yA?mB@W?iA?_@?{@?}GAyB?wC?KAW?uB?eC@qE@mC?cD?[A{G?wBAmA?gHAgD?sG?uEGW@_C?S?gB@{@?eE@oBD_BB_CH}AF[AU?wAAa@@cCB]?{DDS@k@?c@?M?}A?oCCS?{BCS?kBAOAiFCIA_BAkBCKMA?mAI}@Go@Ei@CKAC?ICKCMIMMAAEGEIGM?AGWCOAO?K?MAMBO@MDQBIDIBGBEBE@?@CFGJIFEDCLEJAd@AbA@F?T@AhH?fC?l@?TApF@b@?X?`@Bp@B\\@\\Fh@Fd@F^Rz@FVHXBFJXPb@P^NXPXDV@H@J@N?JAFETIDIBQ@MAMEUMKIEGIIIS[}AKo@Mm@cAmFEQSi@We@EEUYCCWUAAWMSI]I[EA?]A_@@Y@WB{@DgADq@BiADy@@i@@oB?cA?A?G?kB?[?gA?U?M?@uB?_@@uA?aAAe@?k@?Y?o@?i@@aA@c@@UB[BUFe@RgAVqA~@qEDS@YJa@Js@Hm@Hs@Fs@@e@Bs@?yB?aC?wBAs@As@Cm@Ek@?AGc@AKG[G[Ke@CKS{@k@gCMg@AGCOCOAM?MAW@Y~@@tBDv@?V@t@AjCC@?tAAl@?|@?n@AvAAjBC~@?p@AjBAP?@Z?@FfD@`CBfBCtQOxIMdCKn@Ob@Uj@]`@g@`@o@`@wAz@}EbCeChAeEr@_BC{@A}\\_@_ZSmKQgLGiCN_@@yFd@kCZoL~BmOlFcNxEsElAmFlA}F~@iE`@kGVmFAw_@IeH_AiBm@}@e@w@m@mFsFy@_@w@G?aFIs@qYEgICkH?qA?K?aAA@d@@jB@HFDf@?FADGAsB?A?_@J?pA??UAW?KESAMCKyDmKISk@aBSi@Wu@a@gAOe@k@}AOa@oAmDGQCGe@qAEKk@wAi@sA_@y@[q@sAsCKOg@{@a@i@SSq@}@{AaBISi@g@UGQE]CA?YAWCo@?cAXc@JS@a@L_@TGFg@\\g@n@a@j@YXZt@`@z@n@zA\\x@`@z@\\v@\\x@@@LZDHDJPd@N`@LZL^J\\JZ@BH^Lb@Nn@Pt@`@`BpAvFFn@F\\FRLn@VvAXlBBRJp@D^Fl@D^?HB`@Bb@@`@?\\Af@AXAp@A\\A^C\\AVC`@Gb@CVEXEXEXMj@Kd@Kb@KZM^CFUn@[r@Wj@Wb@Yb@QRIJGHKN_@`@MLIHMJ_@XOJKFSPURA@CFGNOFSJe@ViAh@u@^]N_@R]NaAf@a@Py@b@iAh@aAd@C@iCrAk@`@YTa@X]XOLk@f@ON}@`Ak@n@a@f@e@p@c@p@SZQXaEfHYd@kArBkArBsC`Fu@pAu@pA_DrFSX[b@g@t@]`@_@d@SVk@n@i@l@m@j@k@h@gA|@kHpFcFvDaAr@oF`E[T]VkA|@q@f@o@d@aCfBqDnCaDbCmBzAuAdAuAhAyAjAwD`DgA~@e@`@_At@m@f@o@d@q@b@o@^}@d@i@R]NSHA@[JYJWHk@NcAT_@He@Ha@DG@MBi@Fo@F_@@m@B_@@g@?g@?K?g@?Y@]?_@@OSCACAUAYAi@C]C_@CWAo@Ea@A]C_@?e@AA?Y?GAQ?}BCw@CC?g@EI@C?a@?e@Ci@AY?WAc@A_ACu@Ca@AmAGU?o@EK?UGoBI]AcBGIAI?YAa@AKOAAAAKAKASASCSCUCMCKCKEGCECKICCEGAAIMEKAAEIAE?CESESAQAIA]AC?S?O?I?MAk@Cc@G_@AuF@c@AiAAs@?CAkABeA@cA?q@?oB@a@?sB?wC?AE_E?uA@w@BcA?I@_@@Y@WBWB]Ba@F_@@IDUDe@@U@Q@]?_@@cB@wB?aB?C@m@?C?OAc@@K?KBMBYBA@ABC@CJCHGHCJCV?pA?~@?h@CAt@Q?",
              },
              start_location: {
                lat: 44.725468,
                lng: -93.21757699999999,
              },
              transit_details: {
                arrival_stop: {
                  location: {
                    lat: 44.855279,
                    lng: -93.23285899999999,
                  },
                  name: "82 St at Winstead Way NW corner (30th Av",
                },
                arrival_time: {
                  text: "5:40\u202fPM",
                  time_zone: "America/Chicago",
                  value: 1695508808,
                },
                departure_stop: {
                  location: {
                    lat: 44.725468,
                    lng: -93.21757699999999,
                  },
                  name: "Apple Valley Transitway Station",
                },
                departure_time: {
                  text: "5:11\u202fPM",
                  time_zone: "America/Chicago",
                  value: 1695507060,
                },
                headsign: "Mall of America",
                line: {
                  agencies: [
                    {
                      name: "MVTA",
                      phone: "1 (952) 882-7500",
                      url: "http://www.mvta.com/",
                    },
                  ],
                  color: "#71bf44",
                  name: "Burnsville Center-Apple Valley-Mall",
                  short_name: "442",
                  text_color: "#ffffff",
                  url: "http://www.mvta.com/bus_route_information_2.html?routeId=442",
                  vehicle: {
                    icon: "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
                    name: "Bus",
                    type: "BUS",
                  },
                },
                num_stops: 9,
              },
              travel_mode: "TRANSIT",
            },
            {
              distance: {
                text: "233 ft",
                value: 71,
              },
              duration: {
                text: "1 min",
                value: 64,
              },
              end_location: {
                lat: 44.8555173,
                lng: -93.23243979999999,
              },
              html_instructions: "Walk to 30th Ave Station",
              polyline: {
                points: "}wwpGjp`xP?i@FS?MMIO@c@?G?",
              },
              start_location: {
                lat: 44.8551914,
                lng: -93.2328637,
              },
              steps: [
                {
                  distance: {
                    text: "112 ft",
                    value: 34,
                  },
                  duration: {
                    text: "1 min",
                    value: 30,
                  },
                  end_location: {
                    lat: 44.8552173,
                    lng: -93.232432,
                  },
                  html_instructions:
                    "Head <b>east</b> on <b>E 82nd St</b> toward <b>28th Ave S</b>/<wbr/><b>Winstead Wy</b>",
                  polyline: {
                    points: "}wwpGjp`xP?i@FS?MMI",
                  },
                  start_location: {
                    lat: 44.8551914,
                    lng: -93.2328637,
                  },
                  travel_mode: "WALKING",
                },
                {
                  distance: {
                    text: "121 ft",
                    value: 37,
                  },
                  duration: {
                    text: "1 min",
                    value: 34,
                  },
                  end_location: {
                    lat: 44.8555173,
                    lng: -93.23243979999999,
                  },
                  html_instructions:
                    'Turn <b>left</b> onto <b>28th Ave S</b>/<wbr/><b>Winstead Wy</b><div style="font-size:0.9em">Destination will be on the right</div>',
                  maneuver: "turn-left",
                  polyline: {
                    points: "cxwpGtm`xPO@c@?G?",
                  },
                  start_location: {
                    lat: 44.8552173,
                    lng: -93.232432,
                  },
                  travel_mode: "WALKING",
                },
              ],
              travel_mode: "WALKING",
            },
            {
              distance: {
                text: "10.4 mi",
                value: 16775,
              },
              duration: {
                text: "29 mins",
                value: 1740,
              },
              end_location: {
                lat: 44.975101,
                lng: -93.25972,
              },
              html_instructions: "Light rail towards Mpls-Target Field",
              polyline: {
                points:
                  "g|wpGzg`xPHKKQe@u@IQIQAIEOESEYASAQ?K?G@mA?oAA{@AoCAq@@Y?}@?M?Q?U?Y?m@Ag@?wAAsBAm@?E?kA?cC?I@mA?W?OAWCSCOEQGSKSACKMGGGCECKGKCKA[A_@A{A?W?o@?kB?Y?Y?gAAkAAE?aAAE?g@?]CA?[Aq@Ek@Ca@CUAK?MAI?QAM?K?Q?I?a@@gA@c@@E?]@w@@O?a@?I?a@@c@@S@Q@QBYBcBPOBS@Q@[B]BW@K?O@]?Y?G?u@AI?]AS?w@AM?U?_@?cAAi@A{AAk@?cBCoB?C?c@?aC@M?c@?u@@y@?kC@}C?uA@Y?Q?M@K@O@ODQBKBULGB]Vg@b@cAx@BH}BhB[Pe@Lw@Hi@Cy@Wm@Y_@UMQ]e@w@}BWaAMe@k@wCYkD]aFWwFU}JM}HYeMKsCSyBG_@My@[qB[gAuByGeDwKo@sBGM}@sCCWy@yBSTiAkCkCaGQSeD_EEGiDgDSSkDyB_EgCQMwC_AcBc@qA]SG_Ba@WGWGq@KYCWCQCE?_@A]A]A]@w@B_@@yAFoAD_@@U@[A[AYAOCKAWECA[G]I[KwAa@OGG?iBi@qBk@OEa@M_@I_@Ke@I]CIA[Ca@?[?W@_@Ba@Di@D_AFmAJgAF}@FI@c@DC?WFE@QDQDOHYLIDUNMHONOLMNIHUXA@W`@Uf@A@Q`@AFO\\CJQh@KVGRM^MXMXGLYd@EHSVORKJSP_@XWPQHGBSHUFSFUFsA^gA\\iA\\_AZWHa@Nc@LiBl@_Bj@A?m@Ro@P}@R]H_@JSFSHUJULKFC@SLOJuAdA{BdBgAz@}AhAe@^qCtBg@Xk@\\UJ]TQJKFOLMJUXUZSXk@~@_@j@U\\IJc@l@]`@ILQPY^g@h@qB`CaBpBgArAc@j@_@b@u@~@{@dAy@dAkAvAs@~@UX{@jA[f@[h@i@`A}BjE{BlE[`@[^IJm@r@e@j@iApAw@~@w@~@g@j@YZeAdAo@j@q@l@u@n@GFWTKHWTWRSNYP]TeAn@cBbAiAt@}ChBgDrBqDxBcEdCaAj@e@Xc@VkAr@KF}@h@{@j@MFKFa@Vk@\\yA|@uBlA}@h@oDvBwAz@m@^k@\\{ChBkC~A_@Tw@d@eBfA}A`AgBfAQJMHMHMFwA|@{A|@{A~@c@RsD~BgF~C{D~BsCbBQJED_CvAa@TGDmDvBsCdBcC~A]ZUPONyH~EKHOJEBKFYP_BbAoAv@cBbAaB`AeB`A_@Ra@TMHQHa@TKFSJYPc@TC@_@TYRE@_@Tg@Xc@TYPUNEDYRWPo@f@mAdA}@t@WTOLMHQJWJMDKBOBO@K@C?Q?O?QAO?c@Cs@CS?C?QAQ?c@Bc@FE@]HWHqCjAkAf@{Al@gAd@]NaA`@cAb@YL{Ax@{A~@s@`@YPmAt@kAr@oAt@gAp@EBaBbAiAr@qAv@_@RGDMFIDKDSNGDGDCFa@TwA|@GDi@Zs@b@ULC@C@E@EBYNQJABOJEDEDUNWLSLMHOHMFOHA?MFMDOFUHc@P_@NWD]Fq@Vy@ZE@EB[NEBEBGDSLEDCB]\\y@z@YX_@\\UPKF]VGDm@\\}@f@OHa@V]Tw@d@}A`A}@h@oAt@MJiCdB_Al@_@Vi@XWNKFKFUNC@OJC@SLC@GDWRuBnAk@\\y@v@}@f@oAt@QJIFa@LOFUNWLc@X[RKH_@^W\\[f@g@jACHUn@]dA[tAc@rASn@M`@K\\Gb@C^A^@ZDb@RjA@Hb@nCOF",
              },
              start_location: {
                lat: 44.85587700000001,
                lng: -93.231499,
              },
              transit_details: {
                arrival_stop: {
                  location: {
                    lat: 44.975101,
                    lng: -93.25972,
                  },
                  name: "U.S. Bank Stadium Station & Platform",
                },
                arrival_time: {
                  text: "6:27\u202fPM",
                  time_zone: "America/Chicago",
                  value: 1695511620,
                },
                departure_stop: {
                  location: {
                    lat: 44.85587700000001,
                    lng: -93.231499,
                  },
                  name: "30th Ave Station",
                },
                departure_time: {
                  text: "5:58\u202fPM",
                  time_zone: "America/Chicago",
                  value: 1695509880,
                },
                headsign: "Mpls-Target Field",
                line: {
                  agencies: [
                    {
                      name: "Metro Transit",
                      phone: "1 (612) 373-3333",
                      url: "http://www.metrotransit.org/",
                    },
                  ],
                  color: "#0053a0",
                  name: "Metro Blue Line",
                  text_color: "#ffffff",
                  url: "https://www.metrotransit.org/route/blue",
                  vehicle: {
                    icon: "//maps.gstatic.com/mapfiles/transit/iw2/6/tram2.png",
                    name: "Light rail",
                    type: "TRAM",
                  },
                },
                num_stops: 13,
              },
              travel_mode: "TRANSIT",
            },
            {
              distance: {
                text: "52 ft",
                value: 16,
              },
              duration: {
                text: "1 min",
                value: 17,
              },
              end_location: {
                lat: 44.97496,
                lng: -93.259659,
              },
              html_instructions: "Walk to U.S. Bank Stadium Station & Platform",
              polyline: {
                points: "keoqGfxexPZK",
              },
              start_location: {
                lat: 44.975101,
                lng: -93.25972,
              },
              steps: [
                {
                  distance: {
                    text: "52 ft",
                    value: 16,
                  },
                  duration: {
                    text: "1 min",
                    value: 17,
                  },
                  end_location: {
                    lat: 44.97496,
                    lng: -93.259659,
                  },
                  polyline: {
                    points: "keoqGfxexPZK",
                  },
                  start_location: {
                    lat: 44.975101,
                    lng: -93.25972,
                  },
                  travel_mode: "WALKING",
                },
              ],
              travel_mode: "WALKING",
            },
            {
              distance: {
                text: "1.6 mi",
                value: 2548,
              },
              duration: {
                text: "5 mins",
                value: 300,
              },
              end_location: {
                lat: 44.973644,
                lng: -93.23106399999999,
              },
              html_instructions: "Light rail towards Union Depot",
              polyline: {
                points:
                  "odoqGzwexPKDc@qCAISkAEc@A[@_@B_@Fc@J]La@Ro@b@sAZuA\\eATo@BIf@kAZg@V]^_@JIZSb@YVMTONG`@MHGPKnAu@|@g@x@w@j@]b@_@^c@R[L]Pe@DMDUH_@Da@?GB[?U?Q?_@CUAOAQEYCOAGS{A_@mCUkBYoBMcAKo@Gc@CUCYCQCUASQaBGm@Gq@Ec@K}@Gq@K_AACCUAOKw@Ea@Gi@Iw@Iq@Gk@?EQaBa@eEOaBMoAGq@OcBYsCk@kGE[QwAAISaBMqAAKAMAWAW?[A_@?_@?mE?q@AgE?u@?eBAwF?U?mBA?",
              },
              start_location: {
                lat: 44.97496,
                lng: -93.259659,
              },
              transit_details: {
                arrival_stop: {
                  location: {
                    lat: 44.973644,
                    lng: -93.23106399999999,
                  },
                  name: "East Bank",
                },
                arrival_time: {
                  text: "6:39\u202fPM",
                  time_zone: "America/Chicago",
                  value: 1695512340,
                },
                departure_stop: {
                  location: {
                    lat: 44.97496,
                    lng: -93.259659,
                  },
                  name: "U.S. Bank Stadium Station & Platform",
                },
                departure_time: {
                  text: "6:34\u202fPM",
                  time_zone: "America/Chicago",
                  value: 1695512040,
                },
                headsign: "Union Depot",
                line: {
                  agencies: [
                    {
                      name: "Metro Transit",
                      phone: "1 (612) 373-3333",
                      url: "http://www.metrotransit.org/",
                    },
                  ],
                  color: "#008144",
                  name: "Metro Green Line",
                  text_color: "#ffffff",
                  url: "https://www.metrotransit.org/route/green",
                  vehicle: {
                    icon: "//maps.gstatic.com/mapfiles/transit/iw2/6/tram2.png",
                    name: "Light rail",
                    type: "TRAM",
                  },
                },
                num_stops: 2,
              },
              travel_mode: "TRANSIT",
            },
            {
              distance: {
                text: "0.2 mi",
                value: 307,
              },
              duration: {
                text: "4 mins",
                value: 248,
              },
              end_location: {
                lat: 44.9731491,
                lng: -93.2353174,
              },
              html_instructions:
                "Walk to 300 Washington Ave SE, Minneapolis, MN 55455, USA",
              polyline: {
                points: "w|nqGbj`xPH??pA?TPHApA?d@?dD?d@@`@Zh@LTZh@N??n@?`A",
              },
              start_location: {
                lat: 44.9737202,
                lng: -93.23186149999999,
              },
              steps: [
                {
                  distance: {
                    text: "16 ft",
                    value: 5,
                  },
                  duration: {
                    text: "1 min",
                    value: 4,
                  },
                  end_location: {
                    lat: 44.9736742,
                    lng: -93.2318585,
                  },
                  html_instructions: "Head <b>south</b>",
                  polyline: {
                    points: "w|nqGbj`xPH?",
                  },
                  start_location: {
                    lat: 44.9737202,
                    lng: -93.23186149999999,
                  },
                  travel_mode: "WALKING",
                },
                {
                  distance: {
                    text: "135 ft",
                    value: 41,
                  },
                  duration: {
                    text: "1 min",
                    value: 32,
                  },
                  end_location: {
                    lat: 44.973673,
                    lng: -93.23238379999999,
                  },
                  html_instructions:
                    "Turn <b>right</b> toward <b>Washington Ave SE</b>",
                  maneuver: "turn-right",
                  polyline: {
                    points: "m|nqGbj`xP?pA?T",
                  },
                  start_location: {
                    lat: 44.9736742,
                    lng: -93.2318585,
                  },
                  travel_mode: "WALKING",
                },
                {
                  distance: {
                    text: "33 ft",
                    value: 10,
                  },
                  duration: {
                    text: "1 min",
                    value: 9,
                  },
                  end_location: {
                    lat: 44.973585,
                    lng: -93.2324294,
                  },
                  html_instructions:
                    "Turn <b>left</b> toward <b>Washington Ave SE</b>",
                  maneuver: "turn-left",
                  polyline: {
                    points: "m|nqGjm`xPPH",
                  },
                  start_location: {
                    lat: 44.973673,
                    lng: -93.23238379999999,
                  },
                  travel_mode: "WALKING",
                },
                {
                  distance: {
                    text: "0.1 mi",
                    value: 198,
                  },
                  duration: {
                    text: "3 mins",
                    value: 158,
                  },
                  end_location: {
                    lat: 44.9732276,
                    lng: -93.23474969999999,
                  },
                  html_instructions:
                    "Turn <b>right</b> onto <b>Washington Ave SE</b>",
                  maneuver: "turn-right",
                  polyline: {
                    points: "{{nqGtm`xPApA?d@?dD?d@@`@Zh@LTZh@",
                  },
                  start_location: {
                    lat: 44.973585,
                    lng: -93.2324294,
                  },
                  travel_mode: "WALKING",
                },
                {
                  distance: {
                    text: "26 ft",
                    value: 8,
                  },
                  duration: {
                    text: "1 min",
                    value: 7,
                  },
                  end_location: {
                    lat: 44.97315460000001,
                    lng: -93.2347511,
                  },
                  html_instructions: "Turn <b>left</b>",
                  maneuver: "turn-left",
                  polyline: {
                    points: "uynqGd|`xPN?",
                  },
                  start_location: {
                    lat: 44.9732276,
                    lng: -93.23474969999999,
                  },
                  travel_mode: "WALKING",
                },
                {
                  distance: {
                    text: "148 ft",
                    value: 45,
                  },
                  duration: {
                    text: "1 min",
                    value: 38,
                  },
                  end_location: {
                    lat: 44.9731491,
                    lng: -93.2353174,
                  },
                  html_instructions:
                    'Turn <b>right</b><div style="font-size:0.9em">Destination will be on the left</div>',
                  maneuver: "turn-right",
                  polyline: {
                    points: "eynqGd|`xP?n@?`A",
                  },
                  start_location: {
                    lat: 44.97315460000001,
                    lng: -93.2347511,
                  },
                  travel_mode: "WALKING",
                },
              ],
              travel_mode: "WALKING",
            },
          ],
          traffic_speed_entry: [],
          via_waypoint: [],
        },
      ],
      overview_polyline: {
        points:
          "em~oGzp}wPjDz@|JAfE?zD@?o@EkBOmAeC{HyCbC{Ad@sCBeB?yB?@v@@|D?pA}@?yF?iB?wKAqFGeV?q[@ek@EaKEyMHyIRsGByPBsROkBCKMA?eF[e@Ic@a@Uq@Ey@H}@Pa@v@k@|BAT@AhH?tD?dIHnCj@jD`@rAdAvBJ|@AROZw@Aq@i@_AoEiA_Gk@oAw@y@kAc@{AEuK^cL?M?@uB@uBAmDB_EPmBpB_Kb@}CVaEAgLKoCYgBgBeIAmAdGHlOKhIGP?@ZFhDDhFSn\\YtDe@nAeAbAgC|AcJlEeEr@_BCy^a@mf@e@gLGiCNyGf@kCZoL~Bq^fMaMzC}F~@iE`@kGVmFAw_@IeH_AgDsAeHaHy@_@w@GIuGwo@ImAABpCHNn@AB}C|A?Am@Ky@oFcOqFmOaE}J_BcDiAeBkDgE_Ao@o@IcBE}Ct@g@\\oAlA{@dA|@pBlChGhBpE`BfGrBxINlAfAhGj@bGKnGq@nFq@dCmAvCmAfBaAhA_CjBo@j@cEpBkJrEoEjC{BhB{ChDoBxCsWnd@uBtCiCzCyAtAsJnHqPbMoWzRyS|PoEnC}An@yBp@kDn@oBTuCFuB@}@@SU}AIuAIyEOaR_@gLi@oAE[UcC]o@m@]{AGsCKcA?yGEmEF{Q?qKD{Ab@sEH_M?cAJu@RMv@OpC?h@CAt@Q?P?F}@MWs@@oA{DHKKQo@gAK[SqAEaM?}FAgPEsA]iA]]i@Q_KCiHIuESsLJkFd@mDJ_VOcTFcCRcBlA_AbAyCzB}AVcB[mAo@k@w@oA_Ey@}Dw@mKm@uRg@cW_@mGmAsGsIsXaAkDy@yBSTuEmKwDsEoDoD_EmCqEuC{FcB}EoA{B[uAGsJVaBIcAQuK{CgCm@eBIuJl@qDd@iAl@{@v@y@fAk@rAcBrE{@tAoAjAeAh@sCv@yNxEcG`B{@b@uFdE}IzGgCxA{@l@kBnCwDdFyNfQoEvF}C~EyFxKw@`AgD|DqDfE}EnEgDhCgh@f[ij@t\\ug@zZmMbI}J|G{IrFmOvIcFdDsD~CeAf@oBHgEE_B\\aKfE}DbBeGlDuPdKoBhAqIjFsBlAwCjAaD`Am@X}CtC_BnAcCtA{NfJaMvHwB~AaB`AqAl@cBdAw@|@cArBsAtEqAbEK~B~@hGOFZKKDc@qCUuAG_AXaC`B{F~AkE~AoBlBkAlAi@lC}AdBuAbAcA`@y@f@iBH{AS{CiCsRoBoRmFsi@e@mEEkBC{Z?cCQ~CHpA?TPHAvB?jE@`@Zh@h@~@N??n@?`A",
      },
      summary: "",
      warnings: [
        "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths.",
      ],
      waypoint_order: [],
    },
  ],
  status: "OK",
};
trip.status

type Leg = {
  arrival_time: {
    text: "6:43\u202fPM";
    time_zone: "America/Chicago";
    value: 1695512589;
  };
  departure_time: {
    text: "5:11\u202fPM";
    time_zone: "America/Chicago";
    value: 1695507060;
  };
  distance: {
    text: "27.4 mi";
    value: 44026;
  };
  duration: {
    text: "1 hour 32 mins";
    value: 5529;
  };
  end_address: "300 Washington Ave SE, Minneapolis, MN 55455, USA";
  end_location: {
    lat: 44.9731491;
    lng: -93.2353174;
  };
  start_address: "Apple Valley, MN 55124, USA";
  start_location: {
    lat: 44.725468;
    lng: -93.21757699999999;
  };
  steps: [
    {
      distance: {
        text: "15.1 mi";
        value: 24309;
      };
      duration: {
        text: "29 mins";
        value: 1748;
      };
      end_location: {
        lat: 44.855279;
        lng: -93.23285899999999;
      };
      html_instructions: "Bus towards Mall of America";
      polyline: {
        points: "em~oGzp}wPjDz@|JAnA?vB?zD@?o@Aa@CiAASMy@Qu@sBeGe@`@{AnAKHKFKHMDKDMDIBE@K@K@M@O?U?_B@yA?K?yB?@v@@vC?d@?pA}@?{@?}D?qA?W?wAAuA?uBAsB@A?{@AiCCi@AaA?yA?mB@W?iA?_@?{@?}GAyB?wC?KAW?uB?eC@qE@mC?cD?[A{G?wBAmA?gHAgD?sG?uEGW@_C?S?gB@{@?eE@oBD_BB_CH}AF[AU?wAAa@@cCB]?{DDS@k@?c@?M?}A?oCCS?{BCS?kBAOAiFCIA_BAkBCKMA?mAI}@Go@Ei@CKAC?ICKCMIMMAAEGEIGM?AGWCOAO?K?MAMBO@MDQBIDIBGBEBE@?@CFGJIFEDCLEJAd@AbA@F?T@AhH?fC?l@?TApF@b@?X?`@Bp@B\\@\\Fh@Fd@F^Rz@FVHXBFJXPb@P^NXPXDV@H@J@N?JAFETIDIBQ@MAMEUMKIEGIIIS[}AKo@Mm@cAmFEQSi@We@EEUYCCWUAAWMSI]I[EA?]A_@@Y@WB{@DgADq@BiADy@@i@@oB?cA?A?G?kB?[?gA?U?M?@uB?_@@uA?aAAe@?k@?Y?o@?i@@aA@c@@UB[BUFe@RgAVqA~@qEDS@YJa@Js@Hm@Hs@Fs@@e@Bs@?yB?aC?wBAs@As@Cm@Ek@?AGc@AKG[G[Ke@CKS{@k@gCMg@AGCOCOAM?MAW@Y~@@tBDv@?V@t@AjCC@?tAAl@?|@?n@AvAAjBC~@?p@AjBAP?@Z?@FfD@`CBfBCtQOxIMdCKn@Ob@Uj@]`@g@`@o@`@wAz@}EbCeChAeEr@_BC{@A}\\_@_ZSmKQgLGiCN_@@yFd@kCZoL~BmOlFcNxEsElAmFlA}F~@iE`@kGVmFAw_@IeH_AiBm@}@e@w@m@mFsFy@_@w@G?aFIs@qYEgICkH?qA?K?aAA@d@@jB@HFDf@?FADGAsB?A?_@J?pA??UAW?KESAMCKyDmKISk@aBSi@Wu@a@gAOe@k@}AOa@oAmDGQCGe@qAEKk@wAi@sA_@y@[q@sAsCKOg@{@a@i@SSq@}@{AaBISi@g@UGQE]CA?YAWCo@?cAXc@JS@a@L_@TGFg@\\g@n@a@j@YXZt@`@z@n@zA\\x@`@z@\\v@\\x@@@LZDHDJPd@N`@LZL^J\\JZ@BH^Lb@Nn@Pt@`@`BpAvFFn@F\\FRLn@VvAXlBBRJp@D^Fl@D^?HB`@Bb@@`@?\\Af@AXAp@A\\A^C\\AVC`@Gb@CVEXEXEXMj@Kd@Kb@KZM^CFUn@[r@Wj@Wb@Yb@QRIJGHKN_@`@MLIHMJ_@XOJKFSPURA@CFGNOFSJe@ViAh@u@^]N_@R]NaAf@a@Py@b@iAh@aAd@C@iCrAk@`@YTa@X]XOLk@f@ON}@`Ak@n@a@f@e@p@c@p@SZQXaEfHYd@kArBkArBsC`Fu@pAu@pA_DrFSX[b@g@t@]`@_@d@SVk@n@i@l@m@j@k@h@gA|@kHpFcFvDaAr@oF`E[T]VkA|@q@f@o@d@aCfBqDnCaDbCmBzAuAdAuAhAyAjAwD`DgA~@e@`@_At@m@f@o@d@q@b@o@^}@d@i@R]NSHA@[JYJWHk@NcAT_@He@Ha@DG@MBi@Fo@F_@@m@B_@@g@?g@?K?g@?Y@]?_@@OSCACAUAYAi@C]C_@CWAo@Ea@A]C_@?e@AA?Y?GAQ?}BCw@CC?g@EI@C?a@?e@Ci@AY?WAc@A_ACu@Ca@AmAGU?o@EK?UGoBI]AcBGIAI?YAa@AKOAAAAKAKASASCSCUCMCKCKEGCECKICCEGAAIMEKAAEIAE?CESESAQAIA]AC?S?O?I?MAk@Cc@G_@AuF@c@AiAAs@?CAkABeA@cA?q@?oB@a@?sB?wC?AE_E?uA@w@BcA?I@_@@Y@WBWB]Ba@F_@@IDUDe@@U@Q@]?_@@cB@wB?aB?C@m@?C?OAc@@K?KBMBYBA@ABC@CJCHGHCJCV?pA?~@?h@CAt@Q?";
      };
      start_location: {
        lat: 44.725468;
        lng: -93.21757699999999;
      };
      transit_details: {
        arrival_stop: {
          location: {
            lat: 44.855279;
            lng: -93.23285899999999;
          };
          name: "82 St at Winstead Way NW corner (30th Av";
        };
        arrival_time: {
          text: "5:40\u202fPM";
          time_zone: "America/Chicago";
          value: 1695508808;
        };
        departure_stop: {
          location: {
            lat: 44.725468;
            lng: -93.21757699999999;
          };
          name: "Apple Valley Transitway Station";
        };
        departure_time: {
          text: "5:11\u202fPM";
          time_zone: "America/Chicago";
          value: 1695507060;
        };
        headsign: "Mall of America";
        line: {
          agencies: [
            {
              name: "MVTA";
              phone: "1 (952) 882-7500";
              url: "http://www.mvta.com/";
            }
          ];
          color: "#71bf44";
          name: "Burnsville Center-Apple Valley-Mall";
          short_name: "442";
          text_color: "#ffffff";
          url: "http://www.mvta.com/bus_route_information_2.html?routeId=442";
          vehicle: {
            icon: "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png";
            name: "Bus";
            type: "BUS";
          };
        };
        num_stops: 9;
      };
      travel_mode: "TRANSIT";
    },
    {
      distance: {
        text: "233 ft";
        value: 71;
      };
      duration: {
        text: "1 min";
        value: 64;
      };
      end_location: {
        lat: 44.8555173;
        lng: -93.23243979999999;
      };
      html_instructions: "Walk to 30th Ave Station";
      polyline: {
        points: "}wwpGjp`xP?i@FS?MMIO@c@?G?";
      };
      start_location: {
        lat: 44.8551914;
        lng: -93.2328637;
      };
      steps: [
        {
          distance: {
            text: "112 ft";
            value: 34;
          };
          duration: {
            text: "1 min";
            value: 30;
          };
          end_location: {
            lat: 44.8552173;
            lng: -93.232432;
          };
          html_instructions: "Head <b>east</b> on <b>E 82nd St</b> toward <b>28th Ave S</b>/<wbr/><b>Winstead Wy</b>";
          polyline: {
            points: "}wwpGjp`xP?i@FS?MMI";
          };
          start_location: {
            lat: 44.8551914;
            lng: -93.2328637;
          };
          travel_mode: "WALKING";
        },
        {
          distance: {
            text: "121 ft";
            value: 37;
          };
          duration: {
            text: "1 min";
            value: 34;
          };
          end_location: {
            lat: 44.8555173;
            lng: -93.23243979999999;
          };
          html_instructions: 'Turn <b>left</b> onto <b>28th Ave S</b>/<wbr/><b>Winstead Wy</b><div style="font-size:0.9em">Destination will be on the right</div>';
          maneuver: "turn-left";
          polyline: {
            points: "cxwpGtm`xPO@c@?G?";
          };
          start_location: {
            lat: 44.8552173;
            lng: -93.232432;
          };
          travel_mode: "WALKING";
        }
      ];
      travel_mode: "WALKING";
    },
    {
      distance: {
        text: "10.4 mi";
        value: 16775;
      };
      duration: {
        text: "29 mins";
        value: 1740;
      };
      end_location: {
        lat: 44.975101;
        lng: -93.25972;
      };
      html_instructions: "Light rail towards Mpls-Target Field";
      polyline: {
        points: "g|wpGzg`xPHKKQe@u@IQIQAIEOESEYASAQ?K?G@mA?oAA{@AoCAq@@Y?}@?M?Q?U?Y?m@Ag@?wAAsBAm@?E?kA?cC?I@mA?W?OAWCSCOEQGSKSACKMGGGCECKGKCKA[A_@A{A?W?o@?kB?Y?Y?gAAkAAE?aAAE?g@?]CA?[Aq@Ek@Ca@CUAK?MAI?QAM?K?Q?I?a@@gA@c@@E?]@w@@O?a@?I?a@@c@@S@Q@QBYBcBPOBS@Q@[B]BW@K?O@]?Y?G?u@AI?]AS?w@AM?U?_@?cAAi@A{AAk@?cBCoB?C?c@?aC@M?c@?u@@y@?kC@}C?uA@Y?Q?M@K@O@ODQBKBULGB]Vg@b@cAx@BH}BhB[Pe@Lw@Hi@Cy@Wm@Y_@UMQ]e@w@}BWaAMe@k@wCYkD]aFWwFU}JM}HYeMKsCSyBG_@My@[qB[gAuByGeDwKo@sBGM}@sCCWy@yBSTiAkCkCaGQSeD_EEGiDgDSSkDyB_EgCQMwC_AcBc@qA]SG_Ba@WGWGq@KYCWCQCE?_@A]A]A]@w@B_@@yAFoAD_@@U@[A[AYAOCKAWECA[G]I[KwAa@OGG?iBi@qBk@OEa@M_@I_@Ke@I]CIA[Ca@?[?W@_@Ba@Di@D_AFmAJgAF}@FI@c@DC?WFE@QDQDOHYLIDUNMHONOLMNIHUXA@W`@Uf@A@Q`@AFO\\CJQh@KVGRM^MXMXGLYd@EHSVORKJSP_@XWPQHGBSHUFSFUFsA^gA\\iA\\_AZWHa@Nc@LiBl@_Bj@A?m@Ro@P}@R]H_@JSFSHUJULKFC@SLOJuAdA{BdBgAz@}AhAe@^qCtBg@Xk@\\UJ]TQJKFOLMJUXUZSXk@~@_@j@U\\IJc@l@]`@ILQPY^g@h@qB`CaBpBgArAc@j@_@b@u@~@{@dAy@dAkAvAs@~@UX{@jA[f@[h@i@`A}BjE{BlE[`@[^IJm@r@e@j@iApAw@~@w@~@g@j@YZeAdAo@j@q@l@u@n@GFWTKHWTWRSNYP]TeAn@cBbAiAt@}ChBgDrBqDxBcEdCaAj@e@Xc@VkAr@KF}@h@{@j@MFKFa@Vk@\\yA|@uBlA}@h@oDvBwAz@m@^k@\\{ChBkC~A_@Tw@d@eBfA}A`AgBfAQJMHMHMFwA|@{A|@{A~@c@RsD~BgF~C{D~BsCbBQJED_CvAa@TGDmDvBsCdBcC~A]ZUPONyH~EKHOJEBKFYP_BbAoAv@cBbAaB`AeB`A_@Ra@TMHQHa@TKFSJYPc@TC@_@TYRE@_@Tg@Xc@TYPUNEDYRWPo@f@mAdA}@t@WTOLMHQJWJMDKBOBO@K@C?Q?O?QAO?c@Cs@CS?C?QAQ?c@Bc@FE@]HWHqCjAkAf@{Al@gAd@]NaA`@cAb@YL{Ax@{A~@s@`@YPmAt@kAr@oAt@gAp@EBaBbAiAr@qAv@_@RGDMFIDKDSNGDGDCFa@TwA|@GDi@Zs@b@ULC@C@E@EBYNQJABOJEDEDUNWLSLMHOHMFOHA?MFMDOFUHc@P_@NWD]Fq@Vy@ZE@EB[NEBEBGDSLEDCB]\\y@z@YX_@\\UPKF]VGDm@\\}@f@OHa@V]Tw@d@}A`A}@h@oAt@MJiCdB_Al@_@Vi@XWNKFKFUNC@OJC@SLC@GDWRuBnAk@\\y@v@}@f@oAt@QJIFa@LOFUNWLc@X[RKH_@^W\\[f@g@jACHUn@]dA[tAc@rASn@M`@K\\Gb@C^A^@ZDb@RjA@Hb@nCOF";
      };
      start_location: {
        lat: 44.85587700000001;
        lng: -93.231499;
      };
      transit_details: {
        arrival_stop: {
          location: {
            lat: 44.975101;
            lng: -93.25972;
          };
          name: "U.S. Bank Stadium Station & Platform";
        };
        arrival_time: {
          text: "6:27\u202fPM";
          time_zone: "America/Chicago";
          value: 1695511620;
        };
        departure_stop: {
          location: {
            lat: 44.85587700000001;
            lng: -93.231499;
          };
          name: "30th Ave Station";
        };
        departure_time: {
          text: "5:58\u202fPM";
          time_zone: "America/Chicago";
          value: 1695509880;
        };
        headsign: "Mpls-Target Field";
        line: {
          agencies: [
            {
              name: "Metro Transit";
              phone: "1 (612) 373-3333";
              url: "http://www.metrotransit.org/";
            }
          ];
          color: "#0053a0";
          name: "Metro Blue Line";
          text_color: "#ffffff";
          url: "https://www.metrotransit.org/route/blue";
          vehicle: {
            icon: "//maps.gstatic.com/mapfiles/transit/iw2/6/tram2.png";
            name: "Light rail";
            type: "TRAM";
          };
        };
        num_stops: 13;
      };
      travel_mode: "TRANSIT";
    },
    {
      distance: {
        text: "52 ft";
        value: 16;
      };
      duration: {
        text: "1 min";
        value: 17;
      };
      end_location: {
        lat: 44.97496;
        lng: -93.259659;
      };
      html_instructions: "Walk to U.S. Bank Stadium Station & Platform";
      polyline: {
        points: "keoqGfxexPZK";
      };
      start_location: {
        lat: 44.975101;
        lng: -93.25972;
      };
      steps: [
        {
          distance: {
            text: "52 ft";
            value: 16;
          };
          duration: {
            text: "1 min";
            value: 17;
          };
          end_location: {
            lat: 44.97496;
            lng: -93.259659;
          };
          polyline: {
            points: "keoqGfxexPZK";
          };
          start_location: {
            lat: 44.975101;
            lng: -93.25972;
          };
          travel_mode: "WALKING";
        }
      ];
      travel_mode: "WALKING";
    },
    {
      distance: {
        text: "1.6 mi";
        value: 2548;
      };
      duration: {
        text: "5 mins";
        value: 300;
      };
      end_location: {
        lat: 44.973644;
        lng: -93.23106399999999;
      };
      html_instructions: "Light rail towards Union Depot";
      polyline: {
        points: "odoqGzwexPKDc@qCAISkAEc@A[@_@B_@Fc@J]La@Ro@b@sAZuA\\eATo@BIf@kAZg@V]^_@JIZSb@YVMTONG`@MHGPKnAu@|@g@x@w@j@]b@_@^c@R[L]Pe@DMDUH_@Da@?GB[?U?Q?_@CUAOAQEYCOAGS{A_@mCUkBYoBMcAKo@Gc@CUCYCQCUASQaBGm@Gq@Ec@K}@Gq@K_AACCUAOKw@Ea@Gi@Iw@Iq@Gk@?EQaBa@eEOaBMoAGq@OcBYsCk@kGE[QwAAISaBMqAAKAMAWAW?[A_@?_@?mE?q@AgE?u@?eBAwF?U?mBA?";
      };
      start_location: {
        lat: 44.97496;
        lng: -93.259659;
      };
      transit_details: {
        arrival_stop: {
          location: {
            lat: 44.973644;
            lng: -93.23106399999999;
          };
          name: "East Bank";
        };
        arrival_time: {
          text: "6:39\u202fPM";
          time_zone: "America/Chicago";
          value: 1695512340;
        };
        departure_stop: {
          location: {
            lat: 44.97496;
            lng: -93.259659;
          };
          name: "U.S. Bank Stadium Station & Platform";
        };
        departure_time: {
          text: "6:34\u202fPM";
          time_zone: "America/Chicago";
          value: 1695512040;
        };
        headsign: "Union Depot";
        line: {
          agencies: [
            {
              name: "Metro Transit";
              phone: "1 (612) 373-3333";
              url: "http://www.metrotransit.org/";
            }
          ];
          color: "#008144";
          name: "Metro Green Line";
          text_color: "#ffffff";
          url: "https://www.metrotransit.org/route/green";
          vehicle: {
            icon: "//maps.gstatic.com/mapfiles/transit/iw2/6/tram2.png";
            name: "Light rail";
            type: "TRAM";
          };
        };
        num_stops: 2;
      };
      travel_mode: "TRANSIT";
    },
    {
      distance: {
        text: "0.2 mi";
        value: 307;
      };
      duration: {
        text: "4 mins";
        value: 248;
      };
      end_location: {
        lat: 44.9731491;
        lng: -93.2353174;
      };
      html_instructions: "Walk to 300 Washington Ave SE, Minneapolis, MN 55455, USA";
      polyline: {
        points: "w|nqGbj`xPH??pA?TPHApA?d@?dD?d@@`@Zh@LTZh@N??n@?`A";
      };
      start_location: {
        lat: 44.9737202;
        lng: -93.23186149999999;
      };
      steps: [
        {
          distance: {
            text: "16 ft";
            value: 5;
          };
          duration: {
            text: "1 min";
            value: 4;
          };
          end_location: {
            lat: 44.9736742;
            lng: -93.2318585;
          };
          html_instructions: "Head <b>south</b>";
          polyline: {
            points: "w|nqGbj`xPH?";
          };
          start_location: {
            lat: 44.9737202;
            lng: -93.23186149999999;
          };
          travel_mode: "WALKING";
        },
        {
          distance: {
            text: "135 ft";
            value: 41;
          };
          duration: {
            text: "1 min";
            value: 32;
          };
          end_location: {
            lat: 44.973673;
            lng: -93.23238379999999;
          };
          html_instructions: "Turn <b>right</b> toward <b>Washington Ave SE</b>";
          maneuver: "turn-right";
          polyline: {
            points: "m|nqGbj`xP?pA?T";
          };
          start_location: {
            lat: 44.9736742;
            lng: -93.2318585;
          };
          travel_mode: "WALKING";
        },
        {
          distance: {
            text: "33 ft";
            value: 10;
          };
          duration: {
            text: "1 min";
            value: 9;
          };
          end_location: {
            lat: 44.973585;
            lng: -93.2324294;
          };
          html_instructions: "Turn <b>left</b> toward <b>Washington Ave SE</b>";
          maneuver: "turn-left";
          polyline: {
            points: "m|nqGjm`xPPH";
          };
          start_location: {
            lat: 44.973673;
            lng: -93.23238379999999;
          };
          travel_mode: "WALKING";
        },
        {
          distance: {
            text: "0.1 mi";
            value: 198;
          };
          duration: {
            text: "3 mins";
            value: 158;
          };
          end_location: {
            lat: 44.9732276;
            lng: -93.23474969999999;
          };
          html_instructions: "Turn <b>right</b> onto <b>Washington Ave SE</b>";
          maneuver: "turn-right";
          polyline: {
            points: "{{nqGtm`xPApA?d@?dD?d@@`@Zh@LTZh@";
          };
          start_location: {
            lat: 44.973585;
            lng: -93.2324294;
          };
          travel_mode: "WALKING";
        },
        {
          distance: {
            text: "26 ft";
            value: 8;
          };
          duration: {
            text: "1 min";
            value: 7;
          };
          end_location: {
            lat: 44.97315460000001;
            lng: -93.2347511;
          };
          html_instructions: "Turn <b>left</b>";
          maneuver: "turn-left";
          polyline: {
            points: "uynqGd|`xPN?";
          };
          start_location: {
            lat: 44.9732276;
            lng: -93.23474969999999;
          };
          travel_mode: "WALKING";
        },
        {
          distance: {
            text: "148 ft";
            value: 45;
          };
          duration: {
            text: "1 min";
            value: 38;
          };
          end_location: {
            lat: 44.9731491;
            lng: -93.2353174;
          };
          html_instructions: 'Turn <b>right</b><div style="font-size:0.9em">Destination will be on the left</div>';
          maneuver: "turn-right";
          polyline: {
            points: "eynqGd|`xP?n@?`A";
          };
          start_location: {
            lat: 44.97315460000001;
            lng: -93.2347511;
          };
          travel_mode: "WALKING";
        }
      ];
      travel_mode: "WALKING";
    }
  ];
  traffic_speed_entry: [];
  via_waypoint: [];
};
