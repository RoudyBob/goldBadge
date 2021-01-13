function setup() {
    var lis = document.querySelectorAll('ul li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].addEventListener('click', function(e) {
        var vals = [];
        for (var i = 0; i < lis.length; i++) {
          vals.push(lis[i].innerHTML);
        }
        lis.sort();
        for (var i = 0; i < lis.length; i++) {
          lis[i].innerHTML = vals[i];
        };
      });
    }
  }
  
  // Example case. 
  document.body.innerHTML = `
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>`;
  
  setup();
  
  document.getElementsByTagName("li")[1].click();
  console.log(document.body.innerHTML);