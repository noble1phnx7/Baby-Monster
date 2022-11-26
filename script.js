// this search bar is going to use the input and open html file based on user's input
function search_bar(searched_item)
{


  switch(searched_item.toLowerCase())
    {

      case "home":
      window.location.replace("index.html");
      break;

      //Nahian

      case "nahian":
      window.location.replace("nahian.html");
      break;

      case "game developer":
      window.location.replace("nahian_porfolio 1.html");
      break;

      case "game":
      window.location.replace("nahian_porfolio 1.html");
      break;

      case "ui designer":
      window.location.replace("nahian_porfolio 2.html");
      break;

      case "ui":
      window.location.replace("nahian_porfolio 2.html");
      break;

      case "system architect":
      window.location.replace("nahian_porfolio 3.html");
      break;

      //ngocPhan

      case "ngoc":
      window.location.replace("ngoc.html");
      break;

      case "software engineer":
      window.location.replace("ngoc_porfolio 1.html");
      break;

      case "software developer":
      window.location.replace("ngoc_porfolio 2.html");
      break;

      case "lead programmer":
      window.location.replace("ngoc_porfolio 3.html");
      break;

      case "programmer":
      window.location.replace("ngoc_porfolio 3.html");
      break;

      //connor

      case "connor":
      window.location.replace("connor.html");
      break;

      case "cyber security":
      window.location.replace("connor_porfolio 1.html");
      break;

      case "cyber":
      window.location.replace("connor_porfolio 1.html");
      break;

      case "security":
      window.location.replace("connor_porfolio 1.html");
      break;


      case "network engineer":
      window.location.replace("connor_porfolio 2.html");
      break;

      case "network":
      window.location.replace("connor_porfolio 2.html");
      break;


      case "machine learning":
      window.location.replace("connor_porfolio 3.html");
      break;

      case "machine":
      window.location.replace("connor_porfolio 3.html");
      break;

      //rocky

      case "rocky":
      window.location.replace("rocky.html");
      break;

      case "data analytics":
      window.location.replace("rocky_porfolio 1.html");
      break;

      case "data":
      window.location.replace("rocky_porfolio 1.html");
      break;

      case "web developer":
      window.location.replace("rocky_porfolio 2.html");
      break;

      case "web":
      window.location.replace("rocky_porfolio 2.html");
      break;


      case "system engineer":
      window.location.replace("rocky_porfolio 3.html");
      break;

      default:
      window.alert("This search didn't bring any result, try again.");



    }



}

//when user finished typing and the user press enter button, that will trigger the search function
function checkSubmit(e)
{
   if(e && e.keyCode == 13)
   {
      search_bar(document.getElementById('user_typed_in_search_bar').value);
   }
}
