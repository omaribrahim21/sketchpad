    var n = 16;
    var m = 16;
    
    function createtiles(a, b){
        for (var i = 0; i<a; i++){
            var columnDiv = document.createElement('div');
            columnDiv.classList.add('col');
            const container = document.quereySelector('.container');
            container.appendChild(columnDiv);
            console.log("Hello world!");
            for (var j = 0; j<b; j++){
                
                var rowDiv = document.createElement('div');
                rowDiv.classList.add('row');
                columnDiv.appendChild(rowDiv);
            }
        }
    }