var elCardBtn = document.querySelectorAll(".item__rotate-btn");
console.log(elCardBtn);

elCardBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        btn.parentElement.classList.toggle("item__box--active");
    })
})