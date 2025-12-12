// TODO : Voir pour tous les ajouter au chargement de la page et faire des display pour éviter le load de l'iframe

const restaurantList = [
    {
        city: `Valence`,
        name: `Levante Benisanó`,
        price: 11.00,
        iframeLink: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12294.535028055567!2d-0.5753205!3d39.612932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605fa65fcde98d%3A0xd2d4c4567b96465e!2sRestaurante%20Levante%20Benisan%C3%B3!5e0!3m2!1sfr!2sfr!4v1763569224743!5m2!1sfr!2sfr",
    },
    {
        city: `Madrid`,
        name: `Glass Mar`,
        price: 26.00,
        iframeLink: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13527.084165253063!2d-3.69863!3d40.41636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288169368d8b%3A0xfcf24ce2c36045c8!2sGlass%20Bar!5e1!3m2!1sfr!2sfr!4v1763569343919!5m2!1sfr!2sfr",
    },
    {
        city: `Séville`,
        name: `L'Albufera`,
        price: 12.00,
        iframeLink: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112949.58805542387!2d-6.0293568!3d37.3776572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126e76e0c2eb69%3A0x61fe4aba624f3726!2sBar%20L%C2%B4ALBUFERA!5e1!3m2!1sfr!2sfr!4v1763569384731!5m2!1sfr!2sfr",
    },
    {
        city: `Palma de Majorque`,
        name: `La Payesita`,
        price: 16.00,
        iframeLink: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13702.838660194988!2d2.714434!3d39.534151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129796a12bb79d99%3A0x677c6e20a0bb870!2sRestaurante%20La%20Payesita!5e1!3m2!1sfr!2sfr!4v1763569440451!5m2!1sfr!2sfr",
    },
    {
        city: `Barcelona`,
        name: `Quinto Quinta`,
        price: 16.00,
        iframeLink: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5987.650937526215!2d2.144247!3d41.3778765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a27eb2568d59%3A0x7cbc620a5ae75eae!2s11%20Nudos%20Barcelona!5e0!3m2!1sfr!2sfr!4v1763569479989!5m2!1sfr!2sfr",
    },
]

const imgLeft = document.getElementById("restaurantsList").children[0];
const restaurantArticle = document.getElementById("restaurantsList").children[1];
const imgRight = document.getElementById("restaurantsList").children[2];

let currentRestaurant = 0;
restaurantArticle.innerHTML = buildHtmlRestaurant(restaurantList[currentRestaurant]);



imgLeft.addEventListener("click", () => {
    currentRestaurant = (currentRestaurant - 1) % restaurantList.length;
    currentRestaurant < 0 ? currentRestaurant = restaurantList.length - 1: {};

    restaurantArticle.innerHTML = buildHtmlRestaurant(restaurantList[currentRestaurant]);
})

imgRight.addEventListener("click", () => {
    currentRestaurant = (currentRestaurant + 1) % restaurantList.length;

    restaurantArticle.innerHTML = buildHtmlRestaurant(restaurantList[currentRestaurant]);
})

function buildHtmlRestaurant(restaurantInfos) {
    let { city, name, price, iframeLink} = restaurantInfos;

    return `
      <div>
        <h3>${city.toUpperCase()}</h3>
        <p>${name} - ${price.toFixed(2)} €</p>
      </div>
      
      <iframe src="${iframeLink}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
}