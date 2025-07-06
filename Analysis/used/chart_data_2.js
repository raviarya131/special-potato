document.addEventListener("DOMContentLoaded", function() {
  // Your Chart.js code here
    const myColor = '#13264D';
    const otherColor = '#F65272';
    const myColor2 = 'rgba(19, 38, 77, 0.7)';
    const otherColor2 = 'rgba(246, 82, 114, 0.7)';

    const axisColor = {

        x: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
            grid: {
            color: 'rgba(255,0,0,0)',
            borderColor: 'rgba(225,255,225,0.4)'  // <-- this line is answer to initial question
            },
            ticks : {
                font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
            autoSkip: true,
            maxRotation: 0,
            minRotation: 0,
            }
        },
        y: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
            grid: {
            color: 'rgba(20,20,20,0.03)',
            borderColor: 'rgba(225,255,225,0.2)'  // <-- this line is answer to initial question
            },
            ticks : {
                font: {
                          family: "'Barlow Condensed', sans-serif",
                        },}
        }
        };

    const canvas1 = document.getElementById('donut').getContext('2d');
    const donut_chart = new Chart(canvas1, {
        type: 'doughnut',
        data: {
            labels: ['Chloo', 'Yogesh'],
            datasets: [
            {
                borderWidth:0,
                data: [17862, 22137],
                borderJoinStyle:'round',
                backgroundColor: [
                    myColor,
                    otherColor,
                ],
                //backgroundColor: Object.values(Utils.CHART_COLORS),
            }
            ]
        },
        options: {
            devicePixelRatio: 4,
            cutout: 50,
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        boxHeight: 10,
                        font: {
                            family: "'Barlow Condensed', sans-serif",
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Messages Distribution',
                    font: {
                        family: "'Barlow Condensed', sans-serif",
                        size: 18,
                        weight: 400,
                    }
                }
            }
        },

    });


    const canvas2 = document.getElementById('bar-horizontal1').getContext('2d');
    const bar_horizontal1 = new Chart(canvas2, {
        type: 'bar',
        data: {
            labels: ['Chloo', 'Yogesh'],
            datasets: [{
                data: [1.8976842829301845, 2.5307800093414294],
                backgroundColor: [
                    myColor,
                    otherColor,
                ],
            }]
        },
        options: {
            devicePixelRatio: 4,
            scales: {
                x: {
                    ticks: {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        }
                      },
                  grid: {
                    color: 'rgba(225,255,225,0.03)',
                    borderColor: 'rgba(225,255,225,0.2)'  // <-- this line is answer to initial question
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255,0,0,0)',
                        borderColor: 'rgba(225,255,225,0.4)'  // <-- this line is answer to initial question
                    },
                    ticks : {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
                    },

                }
              },
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 0,
                borderColor: 'white',
              }
            },
            responsive: true,
            plugins: {
              legend: {
                display:false,
              },
              title: {
                display: true,
                text: 'Number of Words per Message',
                font: {
                    family: "'Barlow Condensed', sans-serif",
                    size: 18,
                    weight: 400,
                }
              }
            }
          },
    });


    const canvas3 = document.getElementById('bar-horizontal2').getContext('2d');
    const bar_horizontal2 = new Chart(canvas3, {
        type: 'bar',
        data: {
            labels: ['Chloo', 'Yogesh'],
            datasets: [{
                data: [51.01169590643275, 62.60233918128655],
                backgroundColor: [
                    myColor,
                    otherColor,
                ],
            }]
        },
        options: {
            devicePixelRatio: 4,
            scales: {
                x: {
                    ticks: {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        }
                      },
                  grid: {
                    color: 'rgba(225,255,225,0.03)',
                    borderColor: 'rgba(225,255,225,0.2)'  // <-- this line is answer to initial question
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255,0,0,0)',
                        borderColor: 'rgba(225,255,225,0.4)'  // <-- this line is answer to initial question
                    },
                    ticks : {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0,
                    },

                },
              },
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 0,
                borderColor: 'white',
              }
            },
            responsive: true,
                plugins: {
              legend: {
                display:false,
                  labels :{
                      font: {
                          family: "'Barlow Condensed', sans-serif",
                      }
                  },
              },
              title: {
                display: true,
                text: 'Average Message per day',
                font: {
                    family: "'Barlow Condensed', sans-serif",
                    size: 18,
                    weight: 400,
                }
              }
            }
          },
    });

    const canvas4 = document.getElementById('timeline1').getContext('2d');
    const timeline1 = new Chart(canvas4, {
        type: 'bar',
        data: {
            labels: ['  14-02-2022  ', '  19-02-2022  ', '  24-02-2022  ', '  01-03-2022  ', '  06-03-2022  ', '  11-03-2022  ', '  16-03-2022  ', '  21-03-2022  ', '  26-03-2022  ', '  31-03-2022  ', '  05-04-2022  ', '  10-04-2022  ', '  15-04-2022  ', '  20-04-2022  ', '  25-04-2022  ', '  30-04-2022  ', '  05-05-2022  ', '  10-05-2022  ', '  15-05-2022  ', '  20-05-2022  ', '  25-05-2022  ', '  30-05-2022  ', '  04-06-2022  ', '  09-06-2022  ', '  14-06-2022  ', '  19-06-2022  ', '  24-06-2022  ', '  29-06-2022  ', '  04-07-2022  ', '  09-07-2022  ', '  14-07-2022  ', '  19-07-2022  ', '  24-07-2022  ', '  29-07-2022  ', '  03-08-2022  ', '  08-08-2022  ', '  13-08-2022  ', '  18-08-2022  ', '  23-08-2022  ', '  28-08-2022  ', '  02-09-2022  ', '  07-09-2022  ', '  12-09-2022  ', '  17-09-2022  ', '  22-09-2022  ', '  27-09-2022  ', '  02-10-2022  ', '  07-10-2022  ', '  12-10-2022  ', '  17-10-2022  ', '  22-10-2022  ', '  27-10-2022  ', '  01-11-2022  ', '  06-11-2022  ', '  11-11-2022  ', '  16-11-2022  ', '  21-11-2022  ', '  26-11-2022  ', '  01-12-2022  ', '  06-12-2022  ', '  11-12-2022  '],
            datasets: [{
                data: [1497, 1007, 1239, 890, 828, 1960, 1111, 1311, 1654, 1136, 812, 738, 1224, 580, 607, 863, 901, 583, 1250, 1253, 1022, 811, 586, 473, 503, 700, 844, 1345, 856, 370, 575, 463, 681, 747, 565, 508, 906, 562, 543, 617, 509, 621, 560, 673, 508, 184, 26, 14, 8, 20, 26, 7, 7, 1, 14, 11, 22, 7, 32, 27, 458],
                backgroundColor: myColor,
            }]
        },
        options: {
            devicePixelRatio: 4,
            scales: axisColor,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display:false,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Total Messages Over Time',
                    font: {
                    family: "'Barlow Condensed', sans-serif",
                    size: 18,
                    weight: 400,
                },
                }
            }
        },
    });

    const canvas5 = document.getElementById('timeline2').getContext('2d');
    const timeline2 = new Chart(canvas5, {
        type: 'line',
        data: {
            labels: ['  14-02-2022  ', '  19-02-2022  ', '  24-02-2022  ', '  01-03-2022  ', '  06-03-2022  ', '  11-03-2022  ', '  16-03-2022  ', '  21-03-2022  ', '  26-03-2022  ', '  31-03-2022  ', '  05-04-2022  ', '  10-04-2022  ', '  15-04-2022  ', '  20-04-2022  ', '  25-04-2022  ', '  30-04-2022  ', '  05-05-2022  ', '  10-05-2022  ', '  15-05-2022  ', '  20-05-2022  ', '  25-05-2022  ', '  30-05-2022  ', '  04-06-2022  ', '  09-06-2022  ', '  14-06-2022  ', '  19-06-2022  ', '  24-06-2022  ', '  29-06-2022  ', '  04-07-2022  ', '  09-07-2022  ', '  14-07-2022  ', '  19-07-2022  ', '  24-07-2022  ', '  29-07-2022  ', '  03-08-2022  ', '  08-08-2022  ', '  13-08-2022  ', '  18-08-2022  ', '  23-08-2022  ', '  28-08-2022  ', '  02-09-2022  ', '  07-09-2022  ', '  12-09-2022  ', '  17-09-2022  ', '  22-09-2022  ', '  27-09-2022  ', '  02-10-2022  ', '  07-10-2022  ', '  12-10-2022  ', '  17-10-2022  ', '  22-10-2022  ', '  27-10-2022  ', '  01-11-2022  ', '  06-11-2022  ', '  11-11-2022  ', '  16-11-2022  ', '  21-11-2022  ', '  26-11-2022  ', '  01-12-2022  ', '  06-12-2022  ', '  11-12-2022  '],
            datasets: [{
                data: [724, 484, 613, 396, 391, 936, 516, 629, 823, 535, 376, 335, 590, 263, 249, 377, 401, 230, 573, 588, 455, 347, 252, 193, 219, 305, 393, 632, 394, 147, 257, 192, 292, 299, 224, 196, 388, 223, 213, 263, 198, 267, 235, 277, 213, 73, 8, 2, 0, 5, 7, 1, 3, 0, 4, 4, 11, 2, 10, 12, 201],
                backgroundColor: myColor2,
                borderWidth:0,
                fill: true,
                label: 'Chloo',
            },
            {
                data: [773, 523, 626, 494, 437, 1024, 595, 682, 831, 601, 436, 403, 634, 317, 358, 486, 500, 353, 677, 665, 567, 464, 334, 280, 284, 395, 451, 713, 462, 223, 318, 271, 389, 448, 341, 312, 518, 339, 330, 354, 311, 354, 325, 396, 295, 111, 18, 12, 8, 15, 19, 6, 4, 1, 10, 7, 11, 5, 22, 15, 257],
                backgroundColor: otherColor2,
                borderWidth:0,
                fill: true,
                label: 'Yogesh',
            }]
        },
        options: {
            devicePixelRatio: 4,
            scales: axisColor,
            radius: 0,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        boxWidth: 10,
                        boxHeight: 10,
                        font: {
                            family: "'Barlow Condensed', sans-serif",
                        }
                    },
                    display:true,
                    position: 'top',

                },
                title: {
                    display: true,
                    text: 'Messages Over Time by Each User',
                    font: {
                    family: "'Barlow Condensed', sans-serif",
                    size: 18,
                    weight: 400,
                },
                }
            }
        },
    });

    const canvas6 = document.getElementById('timeline3').getContext('2d');
    const myChart4 = new Chart(canvas6, {
        type: 'line',
        data: {
            labels: ['', '', '12 AM', '', '', '', '', '', '6 AM', '', '', '', '', '', '12 PM', '', '', '', '', '', '6 PM', '', '', '', '', '11 PM', '', ''],
            datasets: [{
                data: [,,45, 16, 4, 0, 0, 11, 47, 183, 219, 404, 648, 489, 372, 520, 847, 701, 527, 1291, 1144, 1648, 2040, 2620, 2211, 1459,,],
                backgroundColor: 'rgba(215,85,87,255)',
                borderColor: myColor,
                borderWidth: 2,
                //fill:true,
            },
            {
                data: [,,49, 18, 3, 1, 1, 12, 49, 329, 263, 513, 747, 539, 451, 652, 948, 858, 713, 1653, 1453, 2008, 2502, 2983, 2806, 1859,,],
                backgroundColor: 'rgba(242,142,44,255)',
                borderColor: otherColor,
                borderWidth: 2,
                //fill:true,
            }
            ]
        },
        options: {
            devicePixelRatio: 4,
            scales: {
                x: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
          grid: {
            color: 'rgba(255,0,0,0)',
            borderColor: 'rgba(225,255,225,0.4)'  // <-- this line is answer to initial question
          },
          ticks : {
              font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0
          }
        },
        y: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
        suggestedMin: -1,
          grid: {
            color: 'rgba(20,20,20,0.03)',
            borderColor: 'rgba(225,255,225,0.2)'  // <-- this line is answer to initial question
          },
            ticks: {
            font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
            }


        }
            },

            radius:2,
            responsive: true,
            plugins: {
                legend: {
                    display:false,
                    position: 'top',
                },
                labels: {
                        boxWidth: 10,
                        boxHeight: 10,
                        font: {
                            family: "'Barlow Condensed', sans-serif",
                        }
                    },
            title: {
                display: true,
                text: 'Messages Over Time',
                font: {
                            family: "'Barlow Condensed', sans-serif",
                            size: 18,
                            weight: 400,
                        }
            }
            }
        },
    });

    const canvas7 = document.getElementById('timeline4').getContext('2d');
    var gradient = canvas7.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, otherColor);
    gradient.addColorStop(1, myColor);
    const bar_horizontal3 = new Chart(canvas7, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                data: [5651, 4996, 4832, 5038, 5245, 5774, 7320],
                backgroundColor: gradient,
            }]
        },
        options: {
            devicePixelRatio: 4,
            scales: {
                x: {
                    ticks: {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        }
                      },
                  grid: {
                    color: 'rgba(225,255,225,0.03)',
                    borderColor: 'rgba(225,255,225,0.2)'  // <-- this line is answer to initial question
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255,0,0,0)',
                        borderColor: 'rgba(225,255,225,0.4)'  // <-- this line is answer to initial question
                    },
                    ticks : {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
                    },

                }
              },
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 0,
                borderColor: 'white',
              }
            },
            responsive: true,
            plugins: {
              legend: {
                display:false,
              },
              title: {
                display: true,
                text: 'Number of Message by Days',
                font: {
                    family: "'Barlow Condensed', sans-serif",
                    size: 18,
                    weight: 400,
                }
              }
            }
          },
    });


    const canvas8 = document.getElementById('word1').getContext('2d');
    const bar_horizontal4 = new Chart(canvas8, {
        type: 'bar',
        data: {
            labels: ['Hmm', 'Kutta', 'Bby', 'Seri', 'Illa', 'Haa', 'Ena', 'Gud', 'Tha', 'Pandra', 'Mrng', 'Sollu', 'Aprm', 'Enna', 'Ama', 'Sapta', 'Iruku', 'Epo', 'Vera', 'Love'],
        datasets: [{
                data: [1626, 1623, 648, 544, 420, 410, 385, 339, 335, 333, 333, 322, 320, 303, 267, 259, 246, 233, 226, 222],
        backgroundColor: myColor,
            }]
        },
        options: {
            devicePixelRatio: 4,
            scales: {
                x: {
                    ticks: {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        }
                      },
                  grid: {
                    color: 'rgba(0,0,0,0.03)',
                    borderColor: 'rgba(225,255,225,0.2)'  // <-- this line is answer to initial question
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255,0,0,0)',
                        borderColor: 'rgba(225,255,225,0.4)'  // <-- this line is answer to initial question
                    },
                    ticks : {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
                    },

                }
              },
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 0,
                borderColor: 'white',
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display:false,
              },
              title: {
                display: true,
                text: 'Top Words',
                font: {
                    family: "'Barlow Condensed', sans-serif",
                    size: 18,
                    weight: 400,
                }
              }
            }
          },
    });


    const canvas9 = document.getElementById('word2').getContext('2d');
    const bar_horizontal5 = new Chart(canvas9, {
        type: 'bar',
        data: {
            labels: ['Kutachii', 'Babee', 'Enna', 'Aporo', 'Nee', 'Hmm', 'Panra', 'Tha', 'Seri', 'Nalla', 'Ohh', 'Sapitiya', 'Love', 'You', 'Pondatii', 'Gud', 'Ella', 'Mrng', 'Diii', 'Sollu'],
        datasets: [{
                data: [1626, 1623, 648, 544, 420, 410, 385, 339, 335, 333, 333, 322, 320, 303, 267, 259, 246, 233, 226, 222],
        backgroundColor: otherColor,
            }]
        },
        options: {
            devicePixelRatio: 4,
            scales: {
                x: {
                    reverse: true,
                    ticks: {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        }
                      },
                  grid: {
                    color: 'rgba(0,0,0,0.03)',
                    borderColor: 'rgba(225,255,225,0.2)'  // <-- this line is answer to initial question
                    }
                },
                y: {
                    position: 'right',
                    grid: {
                        color: 'rgba(255,0,0,0)',
                        borderColor: 'rgba(225,255,225,0.4)'  // <-- this line is answer to initial question
                    },
                    ticks : {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
                    },

                }
              },
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 0,
                borderColor: 'white',
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display:false,
              },
              title: {
                display: true,
                text: 'Top Words',
                font: {
                    family: "'Barlow Condensed', sans-serif",
                    size: 18,
                    weight: 400,
                }
              }
            }
          },
    });

    const canvas10 = document.getElementById('word3').getContext('2d');
    const bar_vertical1 = new Chart(canvas10, {
        type: 'bar',
        data: {
            labels: ['Chloo', 'Yogesh'],
            datasets: [{
                data: [4269, 3898],
                backgroundColor: [
                    myColor,
                    otherColor,
                ],
            }]
        },
        options: {
            devicePixelRatio: 4,
            scales: {
                x: {
                    ticks: {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        }
                      },
                  grid: {
                    color: 'rgba(225,255,225,0.03)',
                    borderColor: 'rgba(225,255,225,0.2)'  // <-- this line is answer to initial question
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255,0,0,0)',
                        borderColor: 'rgba(225,255,225,0.4)'  // <-- this line is answer to initial question
                    },
                    ticks : {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
                    },

                }
              },
            indexAxis: 'x',
            elements: {
              bar: {
                borderWidth: 0,
                borderColor: 'white',
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display:false,
              },
              title: {
                display: true,
                text: 'Unique Words',
                font: {
                    family: "'Barlow Condensed', sans-serif",
                    size: 18,
                    weight: 400,
                }
              }
            }
          },
    });

    const canvas11 = document.getElementById('emoji1').getContext('2d');
    const bar_horizontal6 = new Chart(canvas11, {
        type: 'bar',
        data: {
            labels: ['🥰', '💋', '🙈', '😘', '💓', '😁', '🫂'],
        datasets: [{
                data: [809, 747, 349, 346, 293, 268, 204],
                backgroundColor: myColor,
            }]
        },
        options: {
            devicePixelRatio: 4,
            scales: {
                x: {
                    ticks: {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        }
                      },
                  grid: {
                    color: 'rgba(0,0,0,0.03)',
                    borderColor: 'rgba(225,255,225,0.2)'  // <-- this line is answer to initial question
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255,0,0,0)',
                        borderColor: 'rgba(225,255,225,0.4)'  // <-- this line is answer to initial question
                    },
                    ticks : {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
                    },

                }
              },
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 0,
                borderColor: 'white',
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {

              legend: {
                display:false,
              },
              title: {
                display: true,
                text: 'Most Used Emoji',
                font: {
                    family: "'Barlow Condensed', sans-serif",
                    size: 18,
                    weight: 400,
                }
              }
            }
          },
    });

    const canvas12 = document.getElementById('emoji2').getContext('2d');
    const bar_horizontal7 = new Chart(canvas12, {
        type: 'bar',
        data: {
            labels: ['💋', '🙈', '🥰', '😘', '💓', '😁', '😍'],
            datasets: [{
                data: [1879, 1265, 1018, 557, 438, 423, 414],
                backgroundColor: otherColor,
            }]
        },
        options: {
            devicePixelRatio: 4,
            scales: {
                x: {
                    reverse: true,
                    ticks: {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        }
                      },
                  grid: {
                    color: 'rgba(0,0,0,0.03)',
                    borderColor: 'rgba(225,255,225,0.2)'  // <-- this line is answer to initial question
                    }
                },
                y: {
                    position: 'right',
                    grid: {
                        color: 'rgba(255,0,0,0)',
                        borderColor: 'rgba(225,255,225,0.4)'  // <-- this line is answer to initial question
                    },
                    ticks : {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
                    },

                }
              },
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 0,
                borderColor: 'white',
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {

              legend: {
                display:false,
              },
              title: {
                display: true,
                text: 'Most Used Emoji',
                font: {
                    family: "'Barlow Condensed', sans-serif",
                    size: 18,
                    weight: 400,
                }
              }
            }
          },
    });

    const canvas13 = document.getElementById('emoji3').getContext('2d');
    const bar_vertical2 = new Chart(canvas13, {
        type: 'bar',
        data: {
            labels: ['Chloo', 'Yogesh'],
            datasets: [{
                data: [5433, 9126],
                backgroundColor: [
                    myColor,
                    otherColor,
                ],
            }]
        },
        options: {
            devicePixelRatio: 4,
            scales: {
                x: {
                    ticks: {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        }
                      },
                  grid: {
                    color: 'rgba(225,255,225,0.03)',
                    borderColor: 'rgba(225,255,225,0.2)'  // <-- this line is answer to initial question
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255,0,0,0)',
                        borderColor: 'rgba(225,255,225,0.4)'  // <-- this line is answer to initial question
                    },
                    ticks : {
                        font: {
                          family: "'Barlow Condensed', sans-serif",
                        },
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
                    },

                }
              },
            indexAxis: 'x',
            elements: {
              bar: {
                borderWidth: 0,
                borderColor: 'white',
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display:false,
              },
              title: {
                display: true,
                text: 'Number of Emoji',
                font: {
                    family: "'Barlow Condensed', sans-serif",
                    size: 18,
                    weight: 400,
                }
              }
            }
          },
    });

});


