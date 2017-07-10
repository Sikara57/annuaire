$(window.document).ready(function() {
     $.getJSON("script/ifa_annuaire.json", function(data)
     {
        $.each(data,function(key,val)
        {
                $("#liste_contact").append("<a href='#' class='lien' id='link_" + val.nom + "'><li>" + val.nom + "</li></a>");
                $('#detail_usr').append('<section class="usr" id="' + val.nom + '">'+ val.nom + '&nbsp;' + val.prenom + '</section>');
                $('#' + val.nom).append('<br/> ' + val.javascript);
                $('#' + val.nom).append('<br/> ' + val.fav_web);
                $('#' + val.nom).append('<br/> ' + val.fav_web_why);
                $('#' + val.nom).append('<br/> ' + val.fav_app_why);
                $('#' + val.nom).append('<br/> ' + val.before_ifa);
                $('#' + val.nom).append('<br/> ' + val.why_ifa);
                $('#' + val.nom).append('<br/> ' + val.contact_mail);
                $('#' + val.nom).append('<br/> ' + val.fav_web);
        });
     });
     
     $("body").on("click", "a", function()
     {
         $('.usr').hide();
         var myId=$(this).attr('id');
         myId=myId.replace("link_","");
         $("#" + myId).show();

     });
     
});


