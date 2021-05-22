var embed = document.getElementsByClassName("map-svg");

embed[0].addEventListener('load', function () {
    var svg = embed[0].getSVGDocument();
    var GrpMediumLow = svg.getElementsByClassName("showML");
    var GrpExtremelyHigh = svg.getElementsByClassName("showEH");
    var GrpHigh = svg.getElementsByClassName("showH");
    var GrpHighMedium = svg.getElementsByClassName("showHM");
    var GrpLow = svg.getElementsByClassName("showL");

    var groups = [GrpMediumLow, GrpExtremelyHigh, GrpHigh, GrpHighMedium, GrpLow]

    $(svg.getElementsByClassName("do-on-hover")).hover(function () {
        let myClasses = this.className.baseVal.split(/\s+/);
        let myClass = myClasses[myClasses.length - 1];

        switch (myClass) {
            case "showEH":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpExtremelyHigh) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showH":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpHigh) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showHM":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpHighMedium) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showML":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpMediumLow) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showL":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpLow) {
                    i.setAttribute("opacity", "1")
                }
                break;
        }
    }, function () {
        groups.forEach(function (item) {
            for (const i of item) {
                i.setAttribute("opacity", "1")
            }
        })
    })

});

embed[1].addEventListener('load', function () {
    var svg = embed[1].getSVGDocument();
    var GrpMediumLow = svg.getElementsByClassName("showML");
    var GrpExtremelyHigh = svg.getElementsByClassName("showEH");
    var GrpHigh = svg.getElementsByClassName("showH");
    var GrpHighMedium = svg.getElementsByClassName("showHM");
    var GrpLow = svg.getElementsByClassName("showL");

    var groups = [GrpMediumLow, GrpExtremelyHigh, GrpHigh, GrpHighMedium, GrpLow]

    $(svg.getElementsByClassName("do-on-hover")).hover(function () {
        let myClasses = this.className.baseVal.split(/\s+/);
        let myClass = myClasses[myClasses.length - 1];

        switch (myClass) {
            case "showEH":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpExtremelyHigh) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showH":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpHigh) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showHM":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpHighMedium) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showML":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpMediumLow) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showL":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpLow) {
                    i.setAttribute("opacity", "1")
                }
                break;
        }
    }, function () {
        groups.forEach(function (item) {
            for (const i of item) {
                i.setAttribute("opacity", "1")
            }
        })
    })

});

embed[2].addEventListener('load', function () {
    var svg = embed[2].getSVGDocument();
    var GrpMediumLow = svg.getElementsByClassName("showML");
    var GrpExtremelyHigh = svg.getElementsByClassName("showEH");
    var GrpHigh = svg.getElementsByClassName("showH");
    var GrpHighMedium = svg.getElementsByClassName("showHM");
    var GrpLow = svg.getElementsByClassName("showL");

    var groups = [GrpMediumLow, GrpExtremelyHigh, GrpHigh, GrpHighMedium, GrpLow]

    $(svg.getElementsByClassName("do-on-hover")).hover(function () {
        let myClasses = this.className.baseVal.split(/\s+/);
        let myClass = myClasses[myClasses.length - 1];

        switch (myClass) {
            case "showEH":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpExtremelyHigh) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showH":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpHigh) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showHM":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpHighMedium) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showML":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpMediumLow) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showL":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpLow) {
                    i.setAttribute("opacity", "1")
                }
                break;
        }
    }, function () {
        groups.forEach(function (item) {
            for (const i of item) {
                i.setAttribute("opacity", "1")
            }
        })
    })

});

embed[3].addEventListener('load', function () {
    var svg = embed[3].getSVGDocument();
    var GrpMediumLow = svg.getElementsByClassName("showML");
    var GrpExtremelyHigh = svg.getElementsByClassName("showEH");
    var GrpHigh = svg.getElementsByClassName("showH");
    var GrpHighMedium = svg.getElementsByClassName("showHM");
    var GrpLow = svg.getElementsByClassName("showL");

    var groups = [GrpMediumLow, GrpExtremelyHigh, GrpHigh, GrpHighMedium, GrpLow]

    $(svg.getElementsByClassName("do-on-hover")).hover(function () {
        let myClasses = this.className.baseVal.split(/\s+/);
        let myClass = myClasses[myClasses.length - 1];

        switch (myClass) {
            case "showEH":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpExtremelyHigh) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showH":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpHigh) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showHM":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpHighMedium) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showML":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpMediumLow) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showL":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpLow) {
                    i.setAttribute("opacity", "1")
                }
                break;
        }
    }, function () {
        groups.forEach(function (item) {
            for (const i of item) {
                i.setAttribute("opacity", "1")
            }
        })
    })

});

embed[4].addEventListener('load', function () {
    var svg = embed[4].getSVGDocument();
    var GrpMediumLow = svg.getElementsByClassName("showML");
    var GrpExtremelyHigh = svg.getElementsByClassName("showEH");
    var GrpHigh = svg.getElementsByClassName("showH");
    var GrpHighMedium = svg.getElementsByClassName("showHM");
    var GrpLow = svg.getElementsByClassName("showL");

    var groups = [GrpMediumLow, GrpExtremelyHigh, GrpHigh, GrpHighMedium, GrpLow]

    $(svg.getElementsByClassName("do-on-hover")).hover(function () {
        let myClasses = this.className.baseVal.split(/\s+/);
        let myClass = myClasses[myClasses.length - 1];

        switch (myClass) {
            case "showEH":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpExtremelyHigh) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showH":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpHigh) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showHM":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpHighMedium) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showML":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpMediumLow) {
                    i.setAttribute("opacity", "1")
                }
                break;
            case "showL":
                groups.forEach(function (item) {
                    for (const i of item) {
                        i.setAttribute("opacity", ".2")
                    }
                })
                for (const i of GrpLow) {
                    i.setAttribute("opacity", "1")
                }
                break;
        }
    }, function () {
        groups.forEach(function (item) {
            for (const i of item) {
                i.setAttribute("opacity", "1")
            }
        })
    })

});