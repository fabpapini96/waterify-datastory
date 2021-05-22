window.onload = function () {

    let header = dataGraph01[0].split(";");
    header.splice(0, 1);
    dataGraph01.splice(0, 1);
    var countries = Array();
    var data = Array();
    var series = Array();
    dataGraph01.forEach(line => {
        let row = line.split(";");
        countries.push(row[0]);
        row.splice(0, 1);
        data.push(row);
    })

    data = transpose(data);

    for (let i = 0; i < header.length; i++) {
        let obj = {
            name: header[i] + " (%)",
            data: data[i]
        }
        series.push(obj);
    }

    var options = {
        series: series,
        chart: {
            type: 'bar',
            height: 650,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },

        dataLabels: {
            enabled: false,
        },

        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: countries,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%"
                }
            }
        },
        colors: ['#2ED8CD', '#FFBB6A', '#D898FF', '#FF718B', '#8675FE'],
        fill: {
            opacity: 1

        },

        title: {
            text: "Freshwater withdrawal by technology (source: AQUASTAT FAO, dataset retrieved in 2015)",
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize:  '14px',
                fontWeight:  'bold',
                fontFamily:  "Inter",
                color:  '#263238'
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart-tech-mena"), options);
    chart.render();

//treemap
    var options = {
        series: [
            {
                data: [
                    {
                        x: 'Desalination',
                        y: 53.17
                    },
                    {
                        x: 'Reuse of treated wastewater',
                        y: 22.51
                    },
                    {
                        x: 'Reuse of agricultural drenage water',
                        y: 24.32
                    }
                ]
            }
        ],
        legend: {
            show: false
        },
        title: {
            text: "Most exploited alternative resources (Source: AQUASTAT FAO, dataset retrieved in 2015)",
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize:  '14px',
                fontWeight:  'bold',
                fontFamily:  "Inter",
                color:  '#263238'
            },
        },
        chart: {
            height: 650,
            width: 650,
            type: 'treemap',
            toolbar: {
                show: false
            }

        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%"
                }
            }
        },
        colors: [
            '#2ED8CD',
            '#FFBB6A',
            '#FF718B'
        ],
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        },

    };

    var chart2 = new ApexCharts(document.querySelector("#treemap-tech-mena"), options);
    chart2.render();

    var data = Array();
    var feedwater = Array();
    var technologies = Array();
    var series = Array();

    technologies = dataGraph02[0].split(";");
    dataGraph02.splice(0, 1);
    console.log(dataGraph02);

    dataGraph02.forEach(line => {
        let row = line.split(";");
        feedwater.push(row[0]);
        row.splice(0, 1);
        data.push(row);
    })

    for (let i = 0; i < header.length + 1; i++) {
        let obj = {
            name: feedwater[i],
            data: data[i]
        }
        series.push(obj);
    }

    console.log(series);

    var options = {
        series: series,
        chart: {
            height: 550,
            type: 'heatmap',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#008FFB"],
        xaxis: {
            type: 'category',
            categories: technologies
        },
        title: {
            text: "Water recovery ratio according to feedwater type and technology (Source: Science Direct, dataset retrieved in 2018)",
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize:  '14px',
                fontWeight:  'bold',
                fontFamily:  "Inter",
                color:  '#263238'
            },
        }
    };

    var chart3 = new ApexCharts(document.querySelector("#matrix-tech-mena"), options);
    chart3.render();

}

var options = {
    series: [
        {
            data: [
                {
                    x: 'Reverse Osmosis',
                    y: 69
                },
                {
                    x: 'Multi-Stage Flash',
                    y: 18
                },
                {
                    x: 'Multi-Effect Distillation',
                    y: 7
                },
                {
                    x: 'Nanofiltration',
                    y: 3
                },
                {
                    x: 'Electrodyalisis',
                    y: 2
                },
                {
                    x: 'Other',
                    y: 1
                }
            ]
        }
    ],
    legend: {
        show: false
    },
    title: {
        text: "Most exploited technologies (Source: Science Direct, dataset retrieved in 2018)",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  "Inter",
            color:  '#263238'
        },
    },
    chart: {
        height: 650,
        width: 650,
        type: 'treemap',
        toolbar: {
            show: false
        }
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "%"
            }
        }
    },
    colors: [
        '#24C1B7',
        '#FF8D05',
        '#FF8D05',
        '#24C1B7',
        '#24C1B7',
        '#7462F9',
    ],
    plotOptions: {
        treemap: {
            distributed: true,
            enableShades: false
        }
    }

};

var chart3 = new ApexCharts(document.querySelector("#treemap-1-tech-mena"), options);
chart3.render();

var options = {
    series: [
        {
            data: [
                {
                    x: 'Seawater',
                    y: 61
                },
                {
                    x: 'Brakish Water',
                    y: 20
                },
                {
                    x: 'River Water',
                    y: 8
                },
                {
                    x: 'Waste Water',
                    y: 6
                },
                {
                    x: 'Pure Water',
                    y: 4
                },
                {
                    x: 'Brine',
                    y: 1
                }
            ]
        }
    ],
    legend: {
        show: false
    },
    chart: {
        height: 650,
        width: 650,
        type: 'treemap',
        toolbar: {
            show: false
        }
    },
    title: {
        text: "Most exploited feedwater types (Source: Science Direct, dataset retrieved in 2018)",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  "Inter",
            color:  '#263238'
        },
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "%"
            }
        }
    },
    colors: ['#2ED8CD', '#FFBB6A', '#D898FF', '#FF718B', '#8675FE'],
    plotOptions: {
        treemap: {
            distributed: true,
            enableShades: false
        }
    }
};

var chart4 = new ApexCharts(document.querySelector("#treemap-2-tech-mena"), options);
chart4.render();

var options = {
    series: [{
        name: 'Desalination plants (%)',
        data: [30, 22, 15, 14, 9, 4, 4, 2]
    }, {
        name: 'Desalination capacity (%)',
        data: [48, 18, 12, 9, 6, 3, 2, 2]
    }, {
        name: 'Brine production (%)',
        data: [70, 11, 4, 6, 4, 3, 2, 1]
    }],
    chart: {
        type: 'bar',
        height: 550,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    title: {
        text: "Desalination plants, desalination capacity, brine production (Source: Science Direct, dataset retrieved in 2018)",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  "Inter",
            color:  '#263238'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Middle East and North Africa', 'East Asia and Pacific', 'North America', 'Western Europe', 'Latin America and Caribbean', 'Southern Asia', 'Eastern Europe and Central Asia', 'Sub-Saharan Africa'],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + " %"
            }
        }
    },
    colors: ['#2ED8CD', '#FFBB6A', '#FF718B', '#8675FE'],
    legend: {
        position: 'top'
    }
};

var chart5 = new ApexCharts(document.querySelector("#barchart-tech-mena"), options);
chart5.render();

var options = {
    series: [{
        name: 'Reverse Osmosis',
        data: [51.5, 22.8]
    }, {
        name: 'Multi-Stage Flash',
        data: [38.2, 61.6]
    }, {
        name: 'Multi-Effect Distillation',
        data: [8.3, 15.6]
    }, {
        name: 'Electrodialysis',
        data: [0.6, 0]
    }, {
        name: 'Other',
        data: [2, 0]
    }],
    chart: {
        type: 'bar',
        height: 250,
        stacked: true,
        stackType: '100%',
        toolbar: {
            show: false
        }

    },
    title: {
        text: "The major desalination plants in Saudi Arabia and United Arabia Emirates (Source: QWI DesalData, dataset retrieved in 2018)",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  "Inter",
            color:  '#263238'
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },

    dataLabels: {
        enabled: false,
    },

    stroke: {
        width: 1,
        colors: ['#fff']
    },
    xaxis: {
        categories: ["Saudi Arabia", "United Arabia Emirates"],
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "%"
            }
        }
    },
    colors: ['#2ED8CD', '#FFBB6A', '#D898FF', '#FF718B', '#8675FE'],
    fill: {
        opacity: 1

    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    }
};

var chart6 = new ApexCharts(document.querySelector("#stackedbarchart-tech-mena"), options);
chart6.render();

var options = {
    series: [{
        name: '< 1km',
        data: [48.8]
    }, {
        name: '1-10km',
        data: [30.5]
    }, {
        name: '10-50km',
        data: [5.2]
    }, {
        name: '>50km',
        data: [15.5]
    }],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    title: {
        text: "Correlation between desalination plants distance to coastline and brine production (Source: Science Direct, dataset retrieved in 2018)",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  "Inter",
            color:  '#263238'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Distance to coastline'],
    },
    fill: {
        opacity: 1
    },
    colors: ['#2ED8CD', '#FFBB6A', '#FF718B', '#8675FE'],
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "%"
            }
        }
    }
};


var chart7 = new ApexCharts(document.querySelector("#barchart2-tech-mena"), options);
chart7.render();


const transpose = (matrix) => {
    let [row] = matrix
    return row.map((value, column) => matrix.map(row => row[column]))
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
