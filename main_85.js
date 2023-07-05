menuListArray = [ "Pizza Marguerita",
                  "Pizza de Calabresa",
                  "Pizza Quatro Queijos",
                  "Pizza de Lombo",
                  "Pizza Portuguesa",                  
                  "Pizza de Atum"]; //Adicione mais nomes de pizza

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menuListArray.length; i++)
    {
        htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    //Dê um nome apropriado ao Id, como displayMenu 
    document.getElementById("displayMenu").innerHTML = htmldata;
    document.getElementById("menuListHidden").hidden = false;
    document.getElementById("menuListRefresh").hidden = false;
    document.getElementById("menuList").hidden = true;
}

function add_suggestion(){
    //Dê um nome de id apropriado, como addItem
	var item = document.getElementById("addItem").value;
    //Use a função push() para colocar o item no menuListArray
    menuListArray.push(item);
    document.getElementById("addItem").value = "";
}

function hiddenmenu(){
    document.getElementById("displayMenu").innerHTML = "";
    document.getElementById("menuListHidden").hidden = true;
    document.getElementById("menuListRefresh").hidden = true;
    document.getElementById("menuList").hidden = false;
}