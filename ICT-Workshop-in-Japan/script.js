let CountryBody = document.querySelector('#CountryPage');
let Country = document.querySelector('#country');
let Flag = document.querySelectorAll('.flag');
let Foodimg = document.querySelector('#food-img');
let Japan = document.querySelector('.Japan');
let Thailand = document.querySelector('.Thailand');
let Korea = document.querySelector('.Korea');
let India = document.querySelector('.India');
let textgroup1_h = document.querySelector('.textgroup1 h2');
let textgroup1_p = document.querySelector('.textgroup1 p');
let textgroup2_p = document.querySelector('.textgroup2 p');
let malnutritionTitle = document.querySelector('.malnutrition-title');
let textgroup3_p = document.querySelector('.group4 p');
let textgroup4_p = document.querySelector('.group5 p');
let malnutrition_img1 = document.querySelector('.group4 img');
let malnutrition_img2 = document.querySelector('.group5 img');
let CountryName = document.querySelector('.countryname');
let CounryFlag = document.querySelector('.countryflag');
let Rotate_ctn_good = document.querySelector('.rotate-ctn-good');
let Rotate_ctn_bad = document.querySelector('.rotate-ctn-bad');
let Goodfood = document.querySelector('.good');
let Badfood = document.querySelector('.bad');
let Foodtext = document.querySelector('.foodtext');
let Rotate_left = document.querySelector('.rotate-left');
let Rotate_right = document.querySelector('.rotate-right');
let Malnutrition = document.querySelector('#malnutrition');
let Nutritious = document.querySelector('#nutritious-ingredients');
let slider_img = document.querySelectorAll('.slider_item img');
let slider_p = document.querySelectorAll('.slider_item p');
let Vetpic = document.querySelector('.vetpic img');
let Source = document.querySelector('.source');
let Fromdata = document.querySelector('.fromdata');
let Close = document.querySelector('.fromdata h1');
let Data = document.querySelectorAll('.fromdata p');


let goodtext1_h;
let goodtext1_p;
let badtext1_h;
let badtext1_p;
let goodtext2_p;
let badtext2_p;

window.onload = function() {
    Fromdata.style.display = "none";
}



Flag.forEach(function(x) {
    x.addEventListener('click',function() {
        document.querySelector('body').style.overflowY = "scroll"
        Country.classList.add('country_move');
        for (let i =0; i < Flag.length; i++) {
            Flag[i].classList.add('flag_move');
        }
        Foodimg.classList.add('food-img_move');
        Foodimg.style.display = 'initial';
    })
})

let chartVal = [0,0,0,0,0];
let goodChart = [];
let badChart = [];
let mychart;
let country;

drawchart();
function drawchart() {
    var ctx = document.getElementById("myRaderChart");
    mychart = new Chart(ctx, {
    //グラフの種類
    type: 'radar',
    //データの設定
    data: {
        //データ項目のラベル
        labels: ["mineral", "fat", "carbon hydrate", "vitamin", "protein"],
        //データセット
        datasets: [
            {
                label: "nutrition", //凡例のラベル
                //背景色
                backgroundColor: "rgba(200,112,126,0.5)",
                //枠線の色
                borderColor: "rgba(200,112,126,1)",
                //結合点の背景色
                pointBackgroundColor: "rgba(200,112,126,1)",
                //結合点の枠線の色
                pointBorderColor: "#fff",
                //結合点の背景色（ホバーしたとき）
                pointHoverBackgroundColor: "#fff",
                //結合点の枠線の色（ホバーしたとき）
                pointHoverBorderColor: "rgba(200,112,126,1)",
                //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
                hitRadius: 5,
                //グラフのデータ
                data: chartVal,
            }
        ]
    },
    options: {
        // レスポンシブ指定
        responsive: true,
        title: {
            display: true,
            fontSize: 20,
            text: "Nutrition",
        },
        legend: {
            display: false,
        },
        scale: {
            pointLabels: {
                fontSize: 16,
            },
            ticks: {
                // 最小値の値を0指定
                beginAtZero:true,
                min: 0,
                // 最大値を指定
                max: 5,
            }
        }
    }
    })
}

Japan.onclick = function() {
    country = "Japan";
    CountryName.textContent = "JAPAN";
    CountryName.style.fontSize = "100px";
    CounryFlag.src = "./img/Japan.svg";
    Goodfood.src = "./img/japangood.png";
    Badfood.src = "./img/japanbad.png";
    goodChart = [5,4,4,5,5];
    badChart = [4,3,4,4,3];
    mychart.destroy();

    goodtext1_h = "High quality lunches";
    goodtext1_p = 
    "Japanese school lunches are controlled by nutritionists for the five major nutrients.Therefore, there are few nutritional problems.Also, Japanese school lunches are a form of education, which is one of their most attractive features. Experience international food through school lunches, although this varies from region to region. Anyway,they drink milk every day.";
    goodtext2_p = 
    "Japanese school have other attractions. One of these is the way the food is delivered. In Japan, students are in charge of serving food at school lunch time. Students learn to help one another through lunchtime.";
    badtext1_h = "Low quality lunches";
    badtext1_p =
    "Japanese school lunches also have   some problems. These are the economic issues. To eat Japanese school lunches, you have to keep paying a subscription of about $37 per month. it`s painful for poor peoples. elemental school and junior high school 99% of people are able to pay for primary and secondary school meals But the fact is that 1% of the population suffers";
    malnutritionTitle.textContent = "Economic problem";
    console.log("hello");
    textgroup3_p.textContent = "Japanese school lunches also have some problems. These are the economic issues. To eat Japanese school lunches, you have to keep paying a subscription of about $37 per month.";
    textgroup4_p.textContent = "It`s painful for poor peoples. elemental school and junior high school 99% of people are able to pay for primary and secondary school meals. But the fact is that 1% of the population suffers";
    Data[0].textContent = "Ministry of Education, Culture, Sports, Science and Technology, Japan. (2024, September 15). *学校給食摂取基準*.";
    Data[1].textContent = "Ministry of Health, Labour and Welfare, Japan. (2024, September 15). *日本人の食事摂取基準*.";

    malnutrition_img1.src = "./img/badjapan1.gif";
    malnutrition_img2.src = "./img/badjapan2.png";

    slider_img[0].src = "img/rice.png";
    slider_p[0].innerHTML = "<strong>Rice</strong> <br>Provides carbohydrates as the main source of energy.";
    slider_img[1].src = "img/misosoup.png";
    slider_p[1].innerHTML = "<strong>Miso Soup</strong> <br>Contains soybeans, a good source of protein, and includes vegetables to add vitamins and minerals.";
    slider_img[2].src = "img/salad.png";
    slider_p[2].innerHTML = "<strong>Fresh Vegetable Salad</strong> <br>A variety of colorful vegetables such as carrots, cucumbers, and tomatoes provide dietary fiber and a range of vitamins.";
    slider_img[3].src = "img/fruit.png";
    slider_p[3].innerHTML = "<strong>Fresh Fruit</strong> <br>Supplies vitamin C and dietary fiber. (e.g., apples or oranges)";
    slider_img[4].src = "img/milk.png";
    slider_p[4].innerHTML = "<strong>Milk</strong> <br>Provides calcium and protein for growth and bone strength.";

    Japan.classList.add('selectBorder');
    Thailand.classList.remove('selectBorder');
    Korea.classList.remove('selectBorder');
    India.classList.remove('selectBorder');
    
    if(check == 0) {
        textgroup1_h.textContent = goodtext1_h;
        textgroup1_p.textContent = goodtext1_p;
        textgroup2_p.textContent = goodtext2_p;
        chartVal = goodChart;
        drawchart();
    }else {
        textgroup1_h.textContent = badtext1_h;
        textgroup1_p.textContent = badtext1_p;
        chartVal = badChart;
        drawchart();
    }
}

Thailand.onclick = function() {
    country = "Thailand";
    CountryName.textContent = "THAILAND";
    CountryName.style.fontSize = "80px";
    CounryFlag.src = "./img/Thailand.svg";
    Goodfood.src = "./img/thailandgood.png";
    Badfood.src = "./img/thailandbad.png";
    goodChart = [4,4,4,4,4];
    badChart = [3,3,4,3,3];
    mychart.destroy();

    goodtext1_h = "High quality lunches";
    goodtext1_p = 
    "Thailand has developed the Thai School Lunch program through the National Science and Technology Development Agency (NSTDA) under the Ministry of Higher Education, Science, Research and Innovation.";
    goodtext2_p =
    "This program helps schools calculate the appropriate quantity and proportions of nutrients for children's meals. It determines the necessary calorie intake, the amount of ingredients required per child per meal, and the suitable types of food for a week, ensuring that the meals are appropriate for their age and development.";
    badtext1_h = "Low quality lunches";
    badtext1_p = 
    "The Ministry of Public Health reported that over 1 million Thai children aged 0-14 aren't meeting growth benchmarks. Additionally, 20% of school-aged children suffer from malnutrition, and 80% are overweight due to poor diets. These issues are linked to inadequate school lunches, with public schools facing challenges in managing a 21 baht per meal budget, despite the \"Thai School Lunch\" program. ";
    malnutritionTitle.textContent = "Malnutrition";
    textgroup3_p.textContent = "Malnutrition refers to a condition where the body lacks essential nutrients that support growth, strength, and energy production. When children experience malnutrition, it can affect their development and growth because the body cannot absorb and utilize important nutrients effectively. This condition is often found in infants and preschool-aged children, who require a higher intake of nutrients due to their rapid growth and development.";
    textgroup4_p.textContent = "Common symptoms in children who lack protein and energy nutrients include stunted growth, with weight and height below the standard benchmarks. In cases of chronic energy nutrient deficiency, children may exhibit irritability and lack of happiness. Besides protein and energy deficiencies, they often lack other essential nutrients, such as iron, zinc, and various vitamins.";
    Data[0].textContent = "Ministry of Public Health, Thailand. (2024, September 15). *นโยบายด้านโภชนาการ*.";
    Data[1].textContent = "UNICEF Thailand. (2024, September 15). *Nutrition Report*.";

    malnutrition_img1.src = "./img/badthai1.gif";
    malnutrition_img2.src = "./img/badthai2.gif";

    slider_img[0].src = "./img/chicken.png";
    slider_p[0].innerHTML = "<strong>Chicken</strong> <br>Chicken is a high-quality, low-fat protein rich in vitamins B3, B12, A, and essential amino acids.";
    slider_img[1].src = "./img/gourd.png";
    slider_p[1].innerHTML = "<strong>Gourd</strong> <br>Gourd is high in fiber for digestion and contains antioxidants that protect cells and reduce the risk of chronic diseases.";
    slider_img[2].src = "./img/watermelon.png";
    slider_p[2].innerHTML = "<strong>Watermelon</strong> <br>Watermelon is 90% water, preventing dehydration and strengthening joints. It contains carotenoids for added health benefits.";
    slider_img[3].src = "./img/cucumber.png";
    slider_p[3].innerHTML = "<strong>Cucumber</strong> <br>Cucumber is 96.4% water, providing essential minerals that help maintain balance, improve digestion, and offer various health benefits.";
    slider_img[4].src = "./img/brownrice.png";
    slider_p[4].innerHTML = "<strong>Brown rice</strong> <br>Brown rice retains its bran and germ, providing more minerals and fiber than white rice, which lacks these nutrients.";

    Japan.classList.remove('selectBorder');
    Thailand.classList.add('selectBorder');
    Korea.classList.remove('selectBorder');
    India.classList.remove('selectBorder');

    if(check == 0) {
        textgroup1_h.textContent = goodtext1_h;
        textgroup1_p.textContent = goodtext1_p;
        textgroup2_p.textContent = goodtext2_p;
        chartVal = goodChart;
        drawchart();
    }else {
        textgroup1_h.textContent = badtext1_h;
        textgroup1_p.textContent = badtext1_p;
        chartVal = badChart;
        drawchart();
    }
}

Korea.onclick = function() {
    country = "Korea";
    CountryName.textContent = "KOREA";
    CountryName.style.fontSize = "100px";
    CounryFlag.src = "./img/Korea.svg";
    Goodfood.src = "./img/koreagood.png";
    Badfood.src = "./img/koreabad.png";
    goodChart = [5,4,4,5,5];
    badChart = [4,3,4,3,3];
    mychart.destroy();

    goodtext1_h = "High quality lunches";
    goodtext1_p = 
    "Some schools in South Korea allow students to participate in selecting lunch menus by voting for the dishes they want to eat, which helps increase student satisfaction with school meals.";
    goodtext2_p =
    "This approach can encourage children to be more interested in and enjoy their meals. Additionally, it promotes engagement and learning about choosing various balanced foods.";
    badtext1_h = "Low quality lunches";
    badtext1_p =
    "Although schools in South Korea have strict nutritional standards, some menus may lack variety and balance, leading to insufficient nutrient intake for students. Common school meal items include kimchi, stir-fried pork, stir-fried anchovies, stir-fried squid, bulgogi, steamed eggs, and braised pork. Expensive dishes or those with very spicy flavors are rarely included, but mildly spicy dishes are still served, which can be difficult for younger children to eat. Some teachers may insist that students finish all their food, which can cause fear or dislike of school meals.";
    malnutritionTitle.textContent = "Malnutrition";
    textgroup3_p.textContent = "South Korea remains high on the Global Food Security Index, with only 2.5% of South Koreans classified as undernourished in 2020, and this is just one example of the prevailing conditions.";
    textgroup4_p.innerHTML = "・Proportionate Dwarfism:<br>Individuals have a proportionate head, body, and limbs but are smaller overall due to a growth hormone deficiency. Treatment involves hormone injections to help achieve a height closer to average.<br>・Disproportionate Dwarfism:<br>Body parts are out of proportion, such as shorter limbs with a normal-sized torso or a larger head. This is the most common type of dwarfism.";
    Data[0].textContent = "Ministry of Education, Korea. (2024, September 15). *학교급식기준*.";
    Data[1].textContent = "Ministry of Health and Welfare, Korea. (2024, September 15). *영양 가이드라인*.";
    
    malnutrition_img1.src = "./img/badkorea1.gif";
    malnutrition_img2.src = "./img/badkorea2.gif";

    slider_img[0].src = "./img/noodles.png";
    slider_p[0].innerHTML = "<strong>Noodles</strong> <br>Provide carbohydrates, which are a primary source of energy for the body.";
    slider_img[1].src = "./img/chunjang.png";
    slider_p[1].innerHTML = "<strong>Chunjang or<br>Black Bean Paste</strong> <br>Rich in plant-based protein, contains dietary fiber, and adds a deep flavor.";
    slider_img[2].src = "./img/meat.png";
    slider_p[2].innerHTML = "<strong>Pork or Beef</strong> <br>A good source of protein that helps build and repair muscles.";
    slider_img[3].src = "./img/kimchi.png";
    slider_p[3].innerHTML = "<strong>Kimchi</strong> <br>Contains probiotics that are beneficial for digestive health and boost the immune system.";
    slider_img[4].src = "./img/onions.png";
    slider_p[4].innerHTML = "<strong>Onions</strong> <br>Contain antioxidants and phytochemicals that can help strengthen the immune system.";

    Japan.classList.remove('selectBorder');
    Thailand.classList.remove('selectBorder');
    Korea.classList.add('selectBorder');
    India.classList.remove('selectBorder');

    if(check == 0) {
        textgroup1_h.textContent = goodtext1_h;
        textgroup1_p.textContent = goodtext1_p;
        textgroup2_p.textContent = goodtext2_p;
        chartVal = goodChart;
        drawchart();
    }else {
        textgroup1_h.textContent = badtext1_h;
        textgroup1_p.textContent = badtext1_p;
        chartVal = badChart;
        drawchart();
    }
}

India.onclick = function() {
    country = "India";
    CountryName.textContent = "INDIA";
    CountryName.style.fontSize = "100px";
    CounryFlag.src = "./img/India.svg";
    Goodfood.src = "./img/indiagood.png";
    Badfood.src = "./img/indiabad.png";
    goodChart = [4,4,4,4,4];
    badChart = [2,2,4,2,3];
    mychart.destroy();

    goodtext1_h = "High quality lunches";
    goodtext1_p = 
    "India recognizes that children up to the age of 14 should receive free meals that have been monitored for cholesterol levels.";
    goodtext2_p =
    "The food is prepared in the morning in factories with clean equipment, ensuring that every child receives meals of equal quality.";
    badtext1_h = "Low quality lunches";
    badtext1_p =
    "Although India is capable of producing enough food to feed itself, it is home to a quarter of the world's hungry population. It is estimated that around 40% of children in India suffer from malnutrition. India has the highest proportion of underweight children in the world, and nearly one-third of the world's stunted children live there.";
    malnutritionTitle.textContent = "Malnutrition";
    textgroup3_p.textContent = "Malnutrition is a condition where the body receives an inadequate amount of nutrients or energy. It encompasses undernutrition, where the body does not get enough essential nutrients, potentially leading to low body weight or constant fatigue, and overnutrition, where the body receives excessive nutrients, leading to obesity.";
    textgroup4_p.innerHTML = "Symptoms of Malnutrition such as:<br>Undernutrition:<br>・Unexplained weight loss<br>・Reduced appetite<br>・Hair loss and pallor<br>・Palpitations<br>Overnutrition:<br>・Weight exceeding the normal range<br>・Excessive fat accumulation in the body<br>・Shortness of breath or difficulty breathing<br>・Snoring due to respiratory issues";
    Data[0].textContent = "Government of India. (2024, September 15). *Mid-Day Meal Scheme*.";
    Data[1].textContent = "UNICEF India. (2024, September 15). *Nutrition Program*.";
    Data[2].textContent = "World Health Organization. (2024, September 15). *India Nutrition Report*.";
    
    malnutrition_img1.src = "./img/badindia1.gif";
    malnutrition_img2.src = "./img/badindia2.gif";

    slider_img[0].src = "./img/rice.png";
    slider_p[0].innerHTML = "<strong>Basmati rice</strong> <br>Basmati rice is a good source of energy with a lower glycemic index, making it suitable for managing blood sugar levels.";
    slider_img[1].src = "./img/whole.png";
    slider_p[1].innerHTML = "<strong>Whole Wheat Flour</strong> <br>High in fiber for digestion and blood sugar control, and a source of plant-based protein.";
    slider_img[2].src = "./img/lentils.png";
    slider_p[2].innerHTML = "<strong>Lentils</strong> <br>A good source of protein for vegetarians, high in dietary fiber, which helps reduce cholesterol and supports digestive health.";
    slider_img[3].src = "./img/yogurt.png";
    slider_p[3].innerHTML = "<strong>Yogurt</strong> <br>Natural yogurt boosts digestion and immunity with probiotics, while raita helps balance body temperature.";
    slider_img[4].src = "./img/chutney.png";
    slider_p[4].innerHTML = "<strong>Chutney</strong> <br>Chutney is a source of essential vitamins and minerals and helps stimulate digestion by increasing stomach acid.";

    Japan.classList.remove('selectBorder');
    Thailand.classList.remove('selectBorder');
    Korea.classList.remove('selectBorder');
    India.classList.add('selectBorder');

    if(check == 0) {
        textgroup1_h.textContent = goodtext1_h;
        textgroup1_p.textContent = goodtext1_p;
        textgroup2_p.textContent = goodtext2_p;
        chartVal = goodChart;
        drawchart();
    }else {
        textgroup1_h.textContent = badtext1_h;
        textgroup1_p.textContent = badtext1_p;
        chartVal = badChart;
        drawchart();
    }
}

let check = 0;
Rotate_left.onclick = function() {
    Badfood.style.display ='initial';
    if(check == 0) {
        Rotate_ctn_good.classList.remove('visible-left','visible-right');
        Rotate_ctn_good.classList.add('hidden-left');
        Rotate_ctn_bad.classList.remove('hidden-left','hidden-right')
        Rotate_ctn_bad.classList.add('visible-left');
        Foodtext.textContent = "Low Quality Food";
        textgroup1_h.textContent = badtext1_h;
        textgroup1_p.textContent = badtext1_p;
        textgroup2_p.style.display = "none";
        Malnutrition.style.display = "initial";
        Nutritious.style.display = "none";
        Vetpic.src = "./img/vet.png";
        chartVal = badChart;
        mychart.destroy();
        drawchart();

        check = 1;
    }else {
        Rotate_ctn_bad.classList.remove('visible-left','visible-right');
        Rotate_ctn_bad.classList.add('hidden-left');
        Rotate_ctn_good.classList.remove('hidden-left','hidden-right')
        Rotate_ctn_good.classList.add('visible-left');
        Foodtext.textContent = "High Quality Food";
        textgroup1_h.textContent = goodtext1_h;
        textgroup1_p.textContent = goodtext1_p;
        textgroup2_p.textContent = goodtext2_p;
        textgroup2_p.style.display = "initial";
        Malnutrition.style.display = "none";
        Nutritious.style.display = "initial";
        Vetpic.src = "./img/vet2.png";
        chartVal = goodChart;
        mychart.destroy();
        drawchart();

        check = 0;
    }
    console.log(check);
}
Rotate_right.onclick = function() {
    Badfood.style.display ='initial';
    if(check == 0) {
        Rotate_ctn_good.classList.remove('visible-left','visible-right');
        Rotate_ctn_good.classList.add('hidden-right');
        Rotate_ctn_bad.classList.remove('hidden-left','hidden-right')
        Rotate_ctn_bad.classList.add('visible-right');
        Foodtext.textContent = "Low Quality Food";
        textgroup1_h.textContent = badtext1_h;
        textgroup1_p.textContent = badtext1_p;
        textgroup2_p.style.display = "none";
        Malnutrition.style.display = "initial";
        Nutritious.style.display = "none";
        Vetpic.src = "./img/vet.png";
        chartVal = badChart;
        mychart.destroy();
        drawchart();

        check = 1;
    }else {
        Rotate_ctn_bad.classList.remove('visible-left','visible-right');
        Rotate_ctn_bad.classList.add('hidden-right');
        Rotate_ctn_good.classList.remove('hidden-left','hidden-right')
        Rotate_ctn_good.classList.add('visible-right');
        Foodtext.textContent = "High Quality Food";
        textgroup1_h.textContent = goodtext1_h;
        textgroup1_p.textContent = goodtext1_p;
        textgroup2_p.textContent = goodtext2_p;
        textgroup2_p.style.display = "initial";
        Malnutrition.style.display = "none";
        Nutritious.style.display = "initial";
        Vetpic.src = "./img/vet2.png";
        chartVal = goodChart;
        mychart.destroy();
        drawchart();


        check = 0;
    }
    console.log(check);
}


const sliderContainer = document.querySelector(".slider_container");
const nextBtn = document.querySelector(".next_btn");
const backBtn = document.querySelector(".back_btn");

let sliderStatus = 1;

nextBtn.addEventListener("click", () => {
    switch(sliderStatus) {
        case 1:
            sliderStatus = 2;
            sliderContainer.style.transform = `translateX(-${228 * 1}px)`;
            backBtn.style.opacity = 1;
            break;
        case 2:
            sliderStatus = 3;
            sliderContainer.style.transform = `translateX(-${228 * 2}px)`;
            nextBtn.style.opacity = 0.2;
            break;
        case 3:
            break;
    }
});

backBtn.addEventListener("click", () => {
    switch(sliderStatus) {
        case 1:
            break;
        case 2:
            sliderStatus = 1
            sliderContainer.style.transform = `translateX(${0}px)`;
            backBtn.style.opacity = 0.2;
            break;
        case 3:
            sliderStatus = 2;
            sliderContainer.style.transform = `translateX(-${228 * 1}px)`;
            nextBtn.style.opacity = 1;
            break;
    }
});


Source.addEventListener('click', function() {
    Fromdata.style.display = "initial";
    CountryBody.style.overflowY = "hidden";
})
Close.addEventListener('click', function() {
    Fromdata.style.display = "none";
    CountryBody.style.overflowY = "scroll";
})


/*SWIPER*/
const mySwiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,/*ループ再生*/
    autoplay: true,/*自動再生*/
    speed: 10000,/*流れるスピード*/
    loopAdditionalSlide: 1,/*画像をスムーズに流す*/
    breakpoints: { /*レスポンシブ対応「960px以下の場合」*/
      960: {
        spaceBetween:60,
      }
    }
  });