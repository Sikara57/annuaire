$(window.document).ready(function() {
     $.getJSON("script/ifa_annuaire.json", function(data) // boucle sur fichier json
     {
        $.each(data,function(key,val)
        {
            var nom=val.nom.replace(" ","_"); // dans le cas ou c'est un nom composé je remplace le nom par le caractère _
            // j'ajoute à mon nav les différents utilisateurs
            $("#liste_contact").append("<a href='#' class='lien' id='link_" + nom + "'><li>" + val.nom + "</li></a>");
        });
     });
     
     $('#icone').hide();

     $("body").on("click", "a", function()
     {
         
        // Modification du CSS
        // permet de conserver le CSS du survol sur le dernier bouton clic
        $('.lien').removeClass('lien_conservé');
        $(this).addClass('lien_conservé');


        $('.usr').slideUp("fast", function(){$(this).remove().delay(1000);});

        $('#icone').hide();
        var myId=$(this).attr('id');
        myId=myId.replace("link_","");
        

        $.getJSON("script/ifa_annuaire.json", function(data)
        {
            
            $.each(data,function(key,val)
            {
                
                var nom=val.nom.replace(" ","_");
                if (myId == nom) 
                {
                    console.log("prout");
                    $('#detail_usr').append('<section class="usr" id="' + nom + '"></section>');
                    $('#' + nom).append('<img id="identite" src="img/identite.png" alt="Identite">');
                    $('#' + nom).append( '<div id="nom"> ' +val.nom + '<br/>' + val.prenom + '</div>' );
                    $('#' + nom).append('<div class="clear"></div>');
                    $('#' + nom).append('<br/> <span class="label"> Javascript déjà abordé : </span> ' + val.javascript);
                    $('#' + nom).append('<div class="site"></div>' );
                    $('.site').append('<br/> <span class="label"> Site Favoris : </span> ' + val.fav_web);
                    $('.site').append('<br/> <span class="label"> Pourquoi : </span><br/>' + val.fav_web_why);
                    $('#' + nom).append('<div class="application"></div>' );
                    $('.application').append('<br/><span class="label"> Application Favorite : </span>' + val.fav_app);
                    $('.application').append('<br/> <span class="label"> Pourquoi : </span> <br/>' + val.fav_app_why);
                     $('#' + nom).append('<div class="ifa"></div>' );
                    $('.ifa').append('<br/><span class="label"> Avant IFA :</span> ' + val.before_ifa);
                    $('.ifa').append('<br/> <span class="label"> Pourquoi l\'IFA : </span> <br/>' + val.why_ifa);
                    $('#' + nom).append('<br/> <span class="label"> Mail : </span>' + val.contact_mail);
                    $("#" + myId).delay(150).slideDown("slow");
                    return true;
                }
            });                
        });
        $('#icone').delay(150).slideDown();
     });
});


