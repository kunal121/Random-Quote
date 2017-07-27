var api=function(){
$.ajax({
  method:'GET',
  datatype:'json',
  url:'https://random-quote-generator.herokuapp.com/api/quotes/random',
  success:function(result){
     $('.content').html(result.quote);
     $('.author').html(result.author);
  },
  error:function(e){
    console.log("there is some error in fetching data");
  }
});
};
