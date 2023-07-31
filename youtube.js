

//検索ボタンをクリックしたら以下を実行
$("#send").on("click",function(){
        const url = "https://www.googleapis.com/books/v1/volumes?q=" +$("#key").val();
       
        $.ajax({
              url: url,
             dateType:"json"
            }).done(function(date) {
               //HTML部分では商品名、名前、出版社、URL(あれば)を表示する

               
                console.log(date);//オブジェクトの中を確認
             
               

               const len = date.items.length;//データの数を取得

               let html;

               
               for(let i =0; i < len; i++){


                   html += `

                   <tr>
                     <td>${date.items[i].volumeInfo.title}</td>   
                     <td>${date.items[i].volumeInfo.authors}</td>
                     <td>${date.items[i].volumeInfo.publisher}</td>
                     <td>
                          <a target ="_blank" href = ">${date.items[i].volumeInfo.infoLink}">
                           <img src ="${date.items[i].volumeInfo.imageLinks.thumbnail}">
                          </a>
                     </td>
                   </tr>
                   `;
               }

               
               //以下の処理でtable要素の id= listに追加している
               $("#list").empty().hide().append(html).fadeIn(1000);//一行でこのように書くこともできる

      });
   
    
});
