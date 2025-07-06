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
            labels: ['Nath', 'Tamraj'],
            datasets: [
            {
                borderWidth:0,
                data: [336, 308],
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
            labels: ['Nath', 'Tamraj'],
            datasets: [{
                data: [3.478527607361963, 2.306896551724138],
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
            labels: ['Nath', 'Tamraj'],
            datasets: [{
                data: [2.9107142857142856, 2.5892857142857144],
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
            labels: ['  07-06-2019  ', '  11-06-2019  ', '  15-06-2019  ', '  19-06-2019  ', '  23-06-2019  ', '  27-06-2019  ', '  01-07-2019  ', '  05-07-2019  ', '  09-07-2019  ', '  13-07-2019  ', '  17-07-2019  ', '  21-07-2019  ', '  25-07-2019  ', '  29-07-2019  ', '  02-08-2019  ', '  06-08-2019  ', '  10-08-2019  ', '  14-08-2019  ', '  18-08-2019  ', '  22-08-2019  ', '  26-08-2019  ', '  30-08-2019  ', '  03-09-2019  ', '  07-09-2019  ', '  11-09-2019  '],
            datasets: [{
                data: [28, 95, 37, 1, 1, 40, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 15, 0, 0, 0, 0, 358],
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
            labels: ['  07-06-2019  ', '  11-06-2019  ', '  15-06-2019  ', '  19-06-2019  ', '  23-06-2019  ', '  27-06-2019  ', '  01-07-2019  ', '  05-07-2019  ', '  09-07-2019  ', '  13-07-2019  ', '  17-07-2019  ', '  21-07-2019  ', '  25-07-2019  ', '  29-07-2019  ', '  02-08-2019  ', '  06-08-2019  ', '  10-08-2019  ', '  14-08-2019  ', '  18-08-2019  ', '  22-08-2019  ', '  26-08-2019  ', '  30-08-2019  ', '  03-09-2019  ', '  07-09-2019  ', '  11-09-2019  '],
            datasets: [{
                data: [18, 51, 12, 1, 0, 16, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 8, 0, 0, 0, 0, 197],
                backgroundColor: myColor2,
                borderWidth:0,
                fill: true,
                label: 'Nath',
            },
            {
                data: [10, 44, 25, 0, 1, 24, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 7, 0, 0, 0, 0, 161],
                backgroundColor: otherColor2,
                borderWidth:0,
                fill: true,
                label: 'Tamraj',
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
                data: [,,0, 0, 0, 0, 0, 0, 5, 2, 6, 1, 7, 32, 8, 3, 9, 2, 1, 9, 13, 64, 151, 13, 0, 0,,],
                backgroundColor: 'rgba(215,85,87,255)',
                borderColor: myColor,
                borderWidth: 2,
                //fill:true,
            },
            {
                data: [,,0, 0, 0, 0, 0, 0, 2, 3, 9, 0, 5, 37, 5, 1, 6, 3, 2, 7, 11, 55, 133, 10, 1, 0,,],
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
                data: [36, 38, 30, 258, 154, 23, 77],
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
            labels: ['Hai', 'Nhi', 'Kya', 'Tha', 'Tum', 'Pta', 'Hua', 'But', 'The', 'Acha', 'Mere', 'Rha', 'Kuch', 'Rhe', 'Koi', 'Lga', 'Bol', 'Name', 'Koun', 'Ttn'],
        datasets: [{
                data: [69, 45, 24, 23, 19, 16, 15, 14, 13, 12, 11, 11, 9, 9, 9, 9, 9, 8, 8, 8],
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
            labels: ['Nhi', 'Tha', 'The', 'Nahi', 'Bhi', 'Gaya', 'Pata', 'Naam', 'Hua', 'Hoga', 'Mujhe', 'Wahi', 'Anurag', 'Aaj', 'Hai', 'Use', 'Syd', 'Kon', 'Mere', 'Accha'],
        datasets: [{
                data: [69, 45, 24, 23, 19, 16, 15, 14, 13, 12, 11, 11, 9, 9, 9, 9, 9, 8, 8, 8],
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
            labels: ['Nath', 'Tamraj'],
            datasets: [{
                data: [484, 397],
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
            labels: ["   ","","","","","",""],
        datasets: [{
                data: [10, 9, 4, 4, 3, 3, 2],
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
            labels: ["    ","","","","","",""],
            datasets: [{
                data: [3, 3, 2, 1, 1, 1, 1],
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
            labels: ['Nath', 'Tamraj'],
            datasets: [{
                data: [48, 16],
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


