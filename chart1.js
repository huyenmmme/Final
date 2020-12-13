Highcharts.chart("graphic-1", {
    chart: {
        zoomType: "xy"
    },
    title: {
      text: "COVID-19 Combined U.S. Laboratories Reporting to CDC, March 1, 2020 - November 21, 2020",
    },
  
    subtitle: {
      text: "Source: Center for Disease Control and Prevention",
    },
  
    yAxis: {
      title: {
        text: "Number of Specimens",
      },
    },
    xAxis: {
        type: 'datetime'
    },
  
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
  
    plotOptions: {
      series: {
        pointStart: Date.UTC(2020,0,1),
        pointInterval: 24 * 3600 * 1000 // one day  
      },
    },
  
    series: [
      {
        name: "New Cases",
        data: [1,
0,
1,
0,
3,
0,
0,
0,
0,
2,
1,
0,
3,
0,
0,
0,
0,
0,
0,
0,
1,
0,
1,
0,
0,
0,
0,
0,
0,
0,
2,
0,
0,
0,
0,
0,
1,
0,
10,
6,
25,
24,
22,
62,
51,
63,
153,
219,
303,
285,
430,
299,
371,
1206,
772,
2795,
3423,
4759,
3568,
5835,
8837,
10792,
10193,
13931,
16957,
18156,
19309,
18113,
22064,
22715,
27271,
26090,
35085,
30664,
25711,
42594,
22071,
31700,
31673,
34182,
32735,
28542,
24600,
26082,
27212,
29096,
29711,
29899,
24731,
29460,
26168,
26608,
37163,
29993,
33804,
28397,
23698,
23733,
25651,
31549,
29609,
29572,
29828,
19318,
22488,
22966,
31099,
25316,
26984,
24279,
17549,
21501,
20819,
26995,
22769,
32062,
13411,
24705,
23504,
22694,
20448,
24280,
26544,
15365,
24967,
16354,
19737,
21361,
18265,
23698,
26197,
15033,
24980,
14707,
20548,
29061,
29101,
17844,
17661,
17429,
20562,
21860,
22478,
25483,
21930,
18690,
28625,
22990,
27957,
32375,
32421,
27604,
26703,
34441,
37823,
40632,
44784,
44686,
41012,
35901,
43750,
54451,
52823,
57748,
52140,
44268,
46474,
50373,
64873,
59273,
66464,
62915,
60518,
59023,
61193,
67656,
72315,
75062,
67648,
63127,
58124,
63389,
70415,
72526,
75081,
64631,
61762,
54715,
60174,
66314,
68330,
68880,
59009,
47758,
50013,
50322,
53854,
56151,
62228,
54554,
48865,
40637,
55895,
56828,
53224,
56770,
54825,
42061,
38971,
39936,
46796,
45156,
47366,
45450,
38704,
33377,
37647,
46902,
47236,
45168,
43529,
38524,
32466,
43795,
40178,
45074,
49686,
45468,
34335,
26318,
23521,
33296,
37918,
46552,
40523,
35477,
34494,
34794,
42163,
44228,
49254,
42543,
37415,
39554,
49860,
41616,
42749,
46674,
49922,
36488,
34151,
39141,
45515,
47304,
50421,
49490,
36719,
39909,
40052,
53348,
55384,
58677,
53660,
45949,
46893,
47791,
60238,
63710,
70466,
53610,
47119,
60443,
60798,
63945,
74632,
83546,
83958,
63243,
63977,
72731,
82615,
90524,
100177,
89002,
69742,
86608,
88808,
107447,
118482,
133854,
94164,
105294,
123455,
136789,
144000,
158230,
181330,
156838,
138025,
151855,
164382,
165087,
185095,
192673,
184591,
147840,
157531,
165282,
181619,
146913,
172398,
143333,
152608,
152022,
178395,
196227,
219187,
214099,
206992,
174387,
186215,
217046,
231396,
203229,
244011,
213305],
      },
      {
        name: "7-Day Moving Average",
        data: [0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
1,
2,
6,
9,
12,
21,
28,
36,
57,
84,
124,
162,
214,
250,
294,
444,
523,
879,
1328,
1946,
2413,
3194,
4284,
5715,
6772,
8273,
10016,
12100,
14025,
15350,
16960,
18749,
20655,
21959,
24378,
26000,
27085,
30018,
29926,
30559,
31356,
31227,
31523,
31928,
29357,
29930,
29289,
28921,
28282,
27877,
27333,
28027,
28039,
27953,
29105,
29146,
29703,
30227,
29404,
29056,
28919,
28117,
28063,
27458,
27662,
27037,
26859,
26475,
26411,
25798,
25428,
24635,
24383,
24242,
23935,
23349,
22985,
23710,
22158,
23180,
23466,
23734,
22799,
23014,
22226,
22505,
22543,
21521,
21099,
21229,
20370,
19963,
21511,
20092,
21324,
20605,
20489,
22032,
22803,
21610,
21986,
20907,
21743,
21931,
20990,
20473,
21057,
21204,
22804,
23150,
24021,
25435,
26426,
27237,
28382,
29213,
31332,
33142,
34915,
36667,
38583,
39897,
41226,
43602,
45343,
47195,
48260,
48725,
50236,
51182,
52671,
53592,
54837,
56377,
58698,
60491,
62037,
62434,
64297,
65526,
66202,
66574,
66446,
66760,
67154,
67184,
67187,
66756,
66561,
66074,
65614,
65029,
64429,
63543,
62740,
60740,
60068,
58660,
56880,
55141,
54190,
53554,
53712,
52373,
53169,
53594,
53175,
52396,
52434,
51462,
51224,
48945,
47511,
46359,
45015,
43676,
43197,
42397,
42070,
42086,
42383,
42069,
41794,
41769,
41638,
42517,
41556,
41247,
41893,
42170,
41571,
40693,
37797,
36814,
35791,
35344,
34637,
34800,
35968,
37579,
38845,
39747,
40133,
40421,
40698,
41421,
43573,
43495,
43284,
42915,
43970,
43837,
43065,
41534,
42091,
42742,
43277,
43215,
43248,
44071,
44201,
45320,
46474,
47654,
48249,
49568,
50566,
51671,
52656,
53845,
55529,
55522,
55689,
57625,
59483,
60013,
61573,
63441,
67777,
70080,
70585,
72290,
74957,
77227,
79603,
80324,
81252,
84485,
86782,
90329,
94323,
99134,
99872,
104951,
110214,
117069,
122291,
127969,
134751,
143705,
148381,
152438,
156380,
159392,
163230,
164850,
168815,
170217,
171028,
171157,
173518,
168064,
165167,
159273,
159954,
159167,
161041,
163128,
173452,
179410,
188504,
191615,
196500,
202021,
207046,
204766,
209039,
209941],
      }
      
    ],
  
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 2000,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  });
  
