'use strict';

angular.module('serviceFinderApp')
  .factory('allData', function () {
    var factory = {};
    factory.categories = {
      "Städning": ["Bygg & Grovstädning","Dödsbostädning","Flyttstädning","Fönsterputsning","Golvvård","Hemstädning","Hotell & Restaurangstädning","Industri & Lagerstädning","Kontors & Butiksstädning","Matt & Möbeltvätt","Trapphusstädning","Tvättning & Strykning","Städning - Övrigt"],
      "Flytt & Transport": ["Flytthjälp","Gods & Palltransport","Kontorsflytt","Magasinering & Förråd","Piano & Kassaskåpsflytt","Utlandsflytt","Flytt - Övrigt"],
      "Bygg & Renovering": ["Avfuktning","Badrumsrenovering","Bredbandsinstallation","Elinstallation","Fin & Möbelsnickeri","Golvläggning","Golvslipning, Olja & Lack","Golvvärme","Isolering","Kakel & Klinkersättning","Köksrenovering","Luftvärmepumpar","Låssmed","Mattläggning","Målning Invändigt & Tapeter","Möbelmontering","Renovering","Sanering & Radon","Slamsugning & Stamspolning","Stambyte","Trappor","Undertak & Akustik","Ventilation","Vindsrenovering","VVS, Rör & Gas","Värme- och kylsystem","Altan & Uterum","Balkong","Bergvärmepumpar","Betongarbete","Brygga","Dörrar","Fasadarbeten","Fönster","Garage & Carport","Glasmästare","Håltagning","Kamin & Skorsten","Maskinuthyrning","Murning","Målning Utvändigt","Nybyggnation","Om & Tillbyggnation","Persienn, Markis & Solfilm","Plåtarbeten","Rivning","Ställningsmontering & Uthyrning","Svets & Smide","Tak & Fasadrengöring","Takläggning","Takmålning"],
      "Tomt & Markarbeten": ["Asfaltering","Bergs & Brunnsborrning","Dränering","Grundgjutning","Gårdsrenovering","Mark & Anläggning","Pool","Schakttransporter","Staket &amp; Stängsel","Stensättning","Trädfällning & Trädvård","Trädgårdsdesign","Trädgårdsskötsel","Tomt & Markarbeten - Övrigt"],
      "Fastighets & BRF-Tjänster": ["Energi & Miljödeklaration","Projektledning & Upphandlingsstöd","Besiktningsman","Hisservice","Kontrollansvarig","Löpande fastighetsskötsel","OVK-besiktning","Snöröjning & Isborttagning","Sotare","Säkerhet & Larm","Totalförvaltning av fastighet","Underhållsplan","Fastighets & BRF-Tjanster - Övrigt"],
      "Arkitekt & Inredning": ["Arkitektritning","Bygglovsritning","Konstruktionsritning","Arkitekt","Heminredning & Homestyling","Kontorsinredning","Inredning - Övrigt interior design"],
      "Ekonomi & Juridik": ["Bokslut","Deklaration","Ekonomisk förvaltning för Brf","Factoring & Inkasso","Lönehantering","Löpande bokföring","Registrering av bolag","Revision","Ekonomi","Affärsjuridik","Brottmålsjuridik","Familjejuridik","Juridik - Övrigt"],
      "Webb/IT & Design": ["Grafisk design","IT-hosting","IT-support","Mobilutveckling","Programmering","Sökmotoroptimering","Tryckeri & Profilprodukter","Webbdesign","Webbutveckling","Webb/IT & Design - Övrigt"],
      "Övriga tjänster": ["Barnpassning & Läxhjälp","Mäklartjänster","Övriga Tjänster - Övrigt"]
    }
    factory.locations = ["Alingsås", "Borlänge", "Borås", "Enköping", "Eskilstuna", "Falun", "Gävle", "Göteborg", "Halmstad", "Helsingborg", "Jönköping", "Kalmar", "Karlskrona", "Karlstad", "Kristianstad", "Landskrona", "Lidköping", "Linköping", "Luleå", "Lund", "Malmö", "Motala", "Norrköping", "Nyköping", "Piteå", "Sandviken", "Skellefteå", "Skövde", "Stockholm", "Sundsvall", "Södertälje", "Trelleborg", "Trollhättan", "Uddevalla", "Umeå", "Varberg", "Västerås", "Växjö", "Ängelholm", "Örebro", "Örnsköldsvik", "Östersund"];
    factory.selectedCategory = "";
    factory.selectedSubCategory = "";

    factory.selectCategory = function(name) {
      factory.selectedCategory = name;
    };

    factory.selectSubCategory = function(name) {
      factory.selectedSubCategory = name;
    };

    factory.resetSelect = function() {
      factory.selectedCategory = "";
      factory.selectedSubCategory = "";
    }
    return factory;
  });
