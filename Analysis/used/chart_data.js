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
            labels: ['Janie', 'Margot'],
            datasets: [
            {
                borderWidth:0,
                data: [5,6],
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
            labels: ['Janie', 'Margot'],
            datasets: [{
                data: [3.5, 4.2],
                backgroundColor: [
                    myColor,
                    otherColor,
                ],
            }]
        },
        options: {
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
                text: 'Number of Words per text',
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
            labels: ['Janie', 'Margot'],
            datasets: [{
                data: [213, 816],
                backgroundColor: [
                    myColor,
                    otherColor,
                ],
            }]
        },
        options: {
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
            labels: ['      2020-07-07', '      2023-12-25', '      2021-12-17', '      2022-02-28', '      2021-02-25', '      2020-04-06', '      2021-01-01', '      2021-01-21', '      2021-12-08', '      2022-04-26', '      2021-05-26', '      2022-03-11', '      2020-07-22', '      2020-05-31', '      2020-05-22', '      2022-05-26', '      2020-10-04', '      2022-07-01', '      2020-10-07', '      2021-05-01', '      2022-09-06', '      2022-06-05', '      2023-10-29', '      2023-08-13', '      2020-06-03', '      2022-08-07', '      2020-02-12', '      2022-12-06', '      2021-03-26', '      2023-08-11', '      2023-06-03', '      2020-12-16', '      2023-10-07', '      2023-08-21', '      2021-09-16', '      2022-10-27', '      2022-12-31', '      2022-06-30', '      2023-05-19', '      2023-01-07', '      2020-09-07', '      2020-09-08', '      2023-09-17', '      2020-11-10', '      2020-10-27', '      2023-03-08', '      2022-01-13', '      2023-03-16', '      2022-02-10', '      2020-01-03', '      2023-07-06', '      2022-11-10', '      2023-06-29', '      2023-12-18', '      2022-11-24', '      2021-05-25', '      2020-04-30', '      2021-09-01', '      2021-03-15', '      2021-08-24'],
            datasets: [{
                data: [76, 68, 18, 90, 44, 36, 91, 58, 89, 14, 99, 60, 55, 88, 16, 73, 45, 62, 84, 78, 53, 20, 94, 22, 35, 33, 18, 67, 0, 21, 42, 6, 68, 77, 70, 93, 20, 52, 81, 95, 7, 7, 32, 63, 27, 43, 53, 40, 86, 24, 11, 40, 48, 56, 62, 40, 77, 2, 98, 81],
                backgroundColor: myColor,
            }]
        },
        options: {
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
            labels: ['      2020-07-07', '      2023-12-25', '      2021-12-17', '      2022-02-28', '      2021-02-25', '      2020-04-06', '      2021-01-01', '      2021-01-21', '      2021-12-08', '      2022-04-26', '      2021-05-26', '      2022-03-11', '      2020-07-22', '      2020-05-31', '      2020-05-22', '      2022-05-26', '      2020-10-04', '      2022-07-01', '      2020-10-07', '      2021-05-01', '      2022-09-06', '      2022-06-05', '      2023-10-29', '      2023-08-13', '      2020-06-03', '      2022-08-07', '      2020-02-12', '      2022-12-06', '      2021-03-26', '      2023-08-11', '      2023-06-03', '      2020-12-16', '      2023-10-07', '      2023-08-21', '      2021-09-16', '      2022-10-27', '      2022-12-31', '      2022-06-30', '      2023-05-19', '      2023-01-07', '      2020-09-07', '      2020-09-08', '      2023-09-17', '      2020-11-10', '      2020-10-27', '      2023-03-08', '      2022-01-13', '      2023-03-16', '      2022-02-10', '      2020-01-03', '      2023-07-06', '      2022-11-10', '      2023-06-29', '      2023-12-18', '      2022-11-24', '      2021-05-25', '      2020-04-30', '      2021-09-01', '      2021-03-15', '      2021-08-24'],
            datasets: [{
                data: [76, 68, 18, 90, 44, 36, 91, 58, 89, 14, 99, 60, 55, 88, 16, 73, 45, 62, 84, 78, 53, 20, 94, 22, 35, 33, 18, 67, 0, 21, 42, 6, 68, 77, 70, 93, 20, 52, 81, 95, 7, 7, 32, 63, 27, 43, 53, 40, 86, 24, 11, 40, 48, 56, 62, 40, 77, 2, 98, 81],
                backgroundColor: myColor2,
                borderWidth:0,
                fill: true,
                label: 'user 1',
            },
            {
                data: [31, 87, 82, 53, 48, 94, 77, 20, 17, 98, 40, 40, 0, 35, 8, 71, 4, 3, 87, 4, 35, 60, 47, 82, 22, 86, 94, 8, 68, 39, 38, 21, 89, 56, 23, 48, 30, 98, 80, 68, 67, 70, 22, 42, 83, 0, 72, 56, 32, 84, 96, 6, 19, 84, 5, 39, 27, 11, 26, 8],
                backgroundColor: otherColor2,
                borderWidth:0,
                fill: true,
                label: 'user 2',
            }]
        },
        options: {
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
                    text: 'Total Messages Over Time by each user',
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
                data: [, , 53, 8, 75, 95, 39, 43, 49, 50, 78, 36, 99, 2, 11, 46, 74, 26, 35, 57, 94, 55, 87, 59, 17, 56, , ],
                backgroundColor: 'rgba(215,85,87,255)',
                borderColor: myColor,
                borderWidth: 2,
                //fill:true,
            },
            {
                data: [, , 81, 84, 75, 16, 87, 69, 60, 32, 55, 62, 39, 27, 90, 0, 82, 70, 2, 37, 89, 15, 86, 37, 71, 81, ,],
                backgroundColor: 'rgba(242,142,44,255)',
                borderColor: otherColor,
                borderWidth: 2,
                //fill:true,
            }
            ]
        },
        options: {
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
                text: 'Messages Over Time'
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
                data: [81, 84, 75, 16, 87, 69, 60],
                backgroundColor: gradient,
            }]
        },
        options: {
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
                text: 'Number of Words per text',
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
            labels: ['apple', 'book', 'chair', 'dog', 'elephant', 'flower', 'guitar', 'house', 'island', 'jacket', 'kite', 'lamp', 'moon', 'nose', 'orange', 'pencil', 'queen', 'rainbow', 'star', 'tree'],
            datasets: [{
                data: [1961, 1905, 1823, 1616, 1555, 1554, 1443, 1437, 1337, 1049, 1029, 931, 929, 622, 608, 563, 439, 287, 228, 116],
                backgroundColor: myColor,
            }]
        },
        options: {
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
                text: 'Number of Words per text',
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
            labels: ['apple', 'book', 'chair', 'dog', 'elephant', 'flower', 'guitar', 'house', 'island', 'jacket', 'kite', 'lamp', 'moon', 'nose', 'orange', 'pencil', 'queen', 'rainbow', 'star', 'tree'],
            datasets: [{
                data: [1961, 1905, 1823, 1616, 1555, 1554, 1443, 1437, 1337, 1049, 1029, 931, 929, 622, 608, 563, 439, 287, 228, 116],
                backgroundColor: otherColor,
            }]
        },
        options: {
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
                text: 'Number of Words per text',
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
            labels: ['Margot', 'Janie'],
            datasets: [{
                data: [3.5, 4.2],
                backgroundColor: [
                    myColor,
                    otherColor,
                ],
            }]
        },
        options: {
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
                text: 'Number of Words per text',
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
            labels:['😀', '🐶', '🍕', '🎁', '🚀', '🌈', '👑',],
            datasets: [{
                data: [1961, 1905, 1823, 1616, 1555, 1554, 1443],
                backgroundColor: myColor,
            }]
        },
        options: {
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
                text: 'Number of Words per text',
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
            labels:['😀', '🐶', '🍕', '🎁', '🚀', '🌈', '👑',],
            datasets: [{
                data: [1961, 1905, 1823, 1616, 1555, 1554, 1443],
                backgroundColor: otherColor,
            }]
        },
        options: {
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
                text: 'Number of Words per text',
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
            labels: ['Margot', 'Janie'],
            datasets: [{
                data: [3.5, 4.2],
                backgroundColor: [
                    myColor,
                    otherColor,
                ],
            }]
        },
        options: {
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
                text: 'Number of Words per text',
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


