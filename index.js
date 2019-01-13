    function clone()
    {
        console.log("clone")
        var form = document.getElementById("convertTable");
        console.log(form)
        var clone = form.cloneNode(true);
        console.log(clone)
        document.body.appendChild(clone);
        console.log("append")
    }

    function remove()
    {
        var element = document.getElementById("convertForm");
        console.log(element)
        var element2 = document.getElementById("convertForm");
        console.log("1"+element2.children.length)

        console.log(element.hasChildNodes())

        if(element.hasChildNodes())
        {
            element.removeChild(element.lastChild)
            console.log("remove")
            element = null;
        }
        //element.removeChild(element.lastChild)
    }
    
    function clearInput()
    {
        // var sgdOP = document.getElementById("sgdOP")
        // var jpyOP = document.getElementById("jpyOP")
        // var twdOP = document.getElementById("twdOP")
        // var krwOP = document.getElementById("krwOP")
        // sgdOP.innerHTML = ""
        // jpyOP.innerHTML = ""
        // twdOP.innerHTML = ""
        // krwOP.innerHTML = ""
        console.log("clear")
        document.getElementById("amount").value = ""
    }
    
    function conversion()
    {
        var currency = document.getElementById("currency").value
        var amount = document.getElementById("amount").value

        var convertTable = document.getElementById("convertTable")

        var sgdtojpy = 84.40032 //sgd to jpy rate
        var sgdtotwd = 22.26045 //sgd to twd rate
        var sgdtokrw = 812.14770 //sgd to krw rate

        var sgdOP = document.getElementById("sgdOP")
        var jpyOP = document.getElementById("jpyOP")
        var twdOP = document.getElementById("twdOP")
        var krwOP = document.getElementById("krwOP")

        convertTable.rows.item(2).style.display = "none"

        switch(currency)
            {
                case "SGD": 
                    convertTable.rows.item(2).style.display = "none"
                    convertTable.rows.item(3).style.display = "table-row"
                    convertTable.rows.item(4).style.display = "table-row"
                    convertTable.rows.item(5).style.display = "table-row"
                    
                    if(amount == "")
                    {
                        sgdOP.innerHTML,jpyOP.innerHTML,twdOP.innerHTML,krwOP.innerHTML = ""
                    }
                    else
                    {
                    var sgdjpy = (amount*sgdtojpy).toFixed(2)
                    jpyOP.innerHTML= sgdjpy
                    var sgdtwd = (amount*sgdtotwd).toFixed(2)
                    twdOP.innerHTML = sgdtwd
                    var sgdkrw = (amount*sgdtokrw).toFixed(2)
                    krwOP.innerHTML = sgdkrw
                    }
                    break;
                
                case "JPY":
                    convertTable.rows.item(2).style.display = "table-row"
                    convertTable.rows.item(3).style.display = "none"
                    convertTable.rows.item(4).style.display = "table-row"
                    convertTable.rows.item(5).style.display = "table-row"

                    if(amount == "")
                    {
                        sgdOP.innerHTML,jpyOP.innerHTML,twdOP.innerHTML,krwOP.innerHTML = ""
                    }
                    else
                    {
                    var jpysgd = (amount/sgdtojpy).toFixed(2)
                    sgdOP.innerHTML = jpysgd
                    var jpytwd = (amount/sgdtojpy*sgdtotwd).toFixed(2)
                    twdOP.innerHTML = jpytwd
                    var jpykrw = (amount/sgdtojpy*sgdtokrw).toFixed(2)
                    krwOP.innerHTML = jpykrw
                    }
                    break;

                case "TWD":
                    convertTable.rows.item(2).style.display = "table-row"
                    convertTable.rows.item(3).style.display = "table-row"
                    convertTable.rows.item(4).style.display = "none"
                    convertTable.rows.item(5).style.display = "table-row"

                    if(amount == "")
                    {
                        sgdOP.innerHTML,jpyOP.innerHTML,twdOP.innerHTML,krwOP.innerHTML = ""
                    }
                    else
                    {
                    var twdsgd = (amount/sgdtotwd).toFixed(2)
                    sgdOP.innerHTML = twdsgd
                    var twdjpy = (amount/sgdtotwd*sgdtojpy).toFixed(2)
                    jpyOP.innerHTML = twdjpy
                    var twdkrw = (amount/sgdtotwd*sgdtokrw).toFixed(2)
                    krwOP.innerHTML = twdkrw
                    }
                    break;

                case "KRW":
                    convertTable.rows.item(2).style.display = "table-row"
                    convertTable.rows.item(3).style.display = "table-row"
                    convertTable.rows.item(4).style.display = "table-row"
                    convertTable.rows.item(5).style.display = "none"

                    if(amount == "")
                    {
                        sgdOP.innerHTML,jpyOP.innerHTML,twdOP.innerHTML,krwOP.innerHTML = ""
                    }
                    else
                    {
                    var krwsgd = (amount/sgdtokrw).toFixed(2)
                    sgdOP.innerHTML = krwsgd
                    var krwjpy = (amount/sgdtokrw*sgdtojpy).toFixed(2)
                    jpyOP.innerHTML = krwjpy
                    var krwtwd = (amount/sgdtokrw*sgdtotwd).toFixed(2)
                    twdOP.innerHTML = krwtwd
                    }
                    break;
                default:
                    sgdOP.innerHTML,jpyOP.innerHTML,twdOP.innerHTML,krwOP.innerHTML = ""
            }

            if(amount == "")
            {
                sgdOP.innerHTML = ""
                jpyOP.innerHTML = ""
                twdOP.innerHTML = ""
                krwOP.innerHTML = ""
            }
    }
    
    
    //conversion javascript
    // function reset()
    // {
    //     // document.forms["sgd1"].reset();
    //     // document.forms["jpy2"].reset();
    //     // document.forms["twd3"].reset();
    //     document.getElementById("sgd1") = ''
    //     document.getElementById("jpy2") = ''
    //     document.getElementById("twd3") = ''

    // }

    function navigation() 
    {
        var x = document.getElementById("navbar");
        if (x.className === "navbar")
            {
            x.className += " responsive";
            } 
        else 
            {
            x.className = "navbar";
            }
    }

    // function conversion()
    // {
        
    //     var sgdtojpy = 84.40032 //sgd to jpy rate
    //     var sgdtotwd = 22.26045 //sgd to twd rate
        
    //     var sgd1 = document.getElementById("sgd1").value;
    //     var jpy1 = (sgd1*sgdtojpy).toFixed(2)
    //     var twd1 = (sgd1*sgdtotwd).toFixed(2)
    //     document.getElementById("jpy1").innerHTML = jpy1;
    //     document.getElementById("twd1").innerHTML = twd1;

    //     if(document.getElementById('sgd1').value == "")
    //     {
    //     document.getElementById("jpy1").innerHTML = "";
    //     document.getElementById("twd1").innerHTML = "";
    //     }

    //     var jpy2 = document.getElementById("jpy2").value;
    //     var sgd2 = (jpy2/sgdtojpy).toFixed(2)
    //     var twd2 = (jpy2/sgdtojpy*sgdtotwd).toFixed(2)
    //     document.getElementById("sgd2").innerHTML = sgd2;
    //     document.getElementById("twd2").innerHTML = twd2;

    //     if(document.getElementById('jpy2').value == "")
    //     {
    //     document.getElementById("sgd2").innerHTML = "";
    //     document.getElementById("twd2").innerHTML = "";
    //     }

    //     var twd3 = document.getElementById("twd3").value;
    //     var sgd3 = (twd3/sgdtotwd).toFixed(2)
    //     var jpy3 = (twd3/sgdtotwd*sgdtojpy).toFixed(2)
    //     document.getElementById("sgd3").innerHTML = sgd3;
    //     document.getElementById("jpy3").innerHTML = jpy3;

    //     if(document.getElementById('twd3').value == "")
    //     {
    //     document.getElementById("sgd3").innerHTML = "";
    //     document.getElementById("jpy3").innerHTML = "";
    //     }
    // }

    // dark theme javascript
    function toggleDarkLight() 
    {
        var body = document.getElementById("body");
        var currentClass = body.className;
        if(currentClass == "dark-mode")
        {
            body.className = "light-mode";
            document.getElementById("darkmode").innerHTML = "Dark Mode : Off";
        }
        else
        {
            body.className = "dark-mode";
            document.getElementById("darkmode").innerHTML = "Dark Mode : On";
        }
        //body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode"; //same code different way of writing
    }

    //ascii javascript

    function asciiConvert()
    {
       

    var searchText = document.getElementById('asciiSearch').value;
    var targetTable = document.getElementById('ASCIItable');
    var targetTableColCount;

    //Loop through table rows
    for (var rowIndex = 33; rowIndex < 128; rowIndex++) //search from row 32 to 126
        {
            var searchValue = document.getElementById('asciiSearch').value == "";
            var asciiButton = document.getElementById('ASCIIbutton').textContent == "Show all ASCII Codes";
            var asciiButton2 = document.getElementById('ASCIIbutton').textContent == "Show only printable ASCII Codes";
            if(searchValue && asciiButton2)
            {
                for (var i = 1; i <= 128 ; i++)
                {
                    targetTable.rows.item(i).style.display = 'table-row';
                }
            }

            else if(searchValue && asciiButton)
            {
                console.log("asciiButton");
                console.log(searchValue);
                console.log(asciiButton);
                for (var i = 33 ; i <= 127 ; i++)
                {
                    targetTable.rows.item(i).style.display = 'table-row';
                }
            }

            else
            {    

                var rowData = '';

                //Get column count from header row
                if (rowIndex == 32) 
                {
                targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
                continue; //do not execute further code for header row.
                }
                        
                //Process data rows. (rowIndex >= 1)
                for (var colIndex = 4; colIndex < 5; colIndex++) //search only in column 4
                {
                    rowData += targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;
                }

                //If search term is not found in row data
                //then hide the row, else show
                if (rowData.indexOf(searchText) == -1)
                    targetTable.rows.item(rowIndex).style.display = 'none';
                else
                {
                    targetTable.rows.item(rowIndex).style.display = 'table-row'; //display the searched data
                    for (var i = 1; i < 33; i++) //hide row 1 to row 32
                    {
                    targetTable.rows.item(i).style.display = 'none';
                    }
                    targetTable.rows.item(128).style.display = 'none';
                }

            }
            
            
        }
    }

    $(document).ready(function(){
        $('#ASCIIbutton').click(function(){
            $('.non-print').toggle(); //ERROR AT .TEXT()
            $('#ASCIIbutton').text($('#ASCIIbutton').text() == 'Show all ASCII Codes' ? 'Show only printable ASCII Codes' : 'Show all ASCII Codes');
        });
    });