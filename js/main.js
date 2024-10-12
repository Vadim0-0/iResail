/* Header - menu */

document.addEventListener("DOMContentLoaded", () => {
  // Находим необходимые элементы
  const headerMenu = document.querySelector('.header-menu');
  const headerBottom = document.querySelector('.header-bottom');
  const headerBottomBtn = document.querySelector('.header-bottom__btn');

  // Добавляем обработчик клика на кнопку
  headerBottomBtn.addEventListener('click', () => {
    // Переключаем класс 'active' у меню и нижней части хедера
    headerMenu.classList.toggle('active');
    headerBottom.classList.toggle('active');
  });

  // Убираем класс 'active', когда курсор покидает область header-menu
  headerMenu.addEventListener('mouseleave', () => {
    headerMenu.classList.remove('active');
    headerBottom.classList.remove('active');
  });
});

/* Header - переключение блоков

document.addEventListener("DOMContentLoaded", () => {
  // Получаем все кнопки в меню
  const menuItems = document.querySelectorAll('.header-menu__content-menu__list-item a');
  // Получаем все списки с продуктами
  const productLists = document.querySelectorAll('.header-menu__content-products__card-list');

  // Функция для обработки наведения на кнопку
  function handleMenuHover(event) {
    const targetId = event.currentTarget.id;

    // Удаляем класс active у всех элементов меню
    menuItems.forEach(item => {
      item.parentElement.classList.remove('active');
    });

    // Добавляем класс active к элементу меню, на который навели курсор
    event.currentTarget.parentElement.classList.add('active');

    // Удаляем класс active у всех списков продуктов
    productLists.forEach(list => {
      list.classList.remove('active');
    });

    // Находим список продуктов, который соответствует выбранному меню
    const targetList = document.querySelector(`.header-menu__content-products__card-list[data-target="${targetId}"]`);

    // Добавляем класс active к соответствующему списку продуктов
    if (targetList) {
      targetList.classList.add('active');
    }
  }

  // Назначаем обработчики событий для всех кнопок (событие 'mouseenter' вместо 'click')
  menuItems.forEach(button => {
    button.addEventListener('mouseenter', handleMenuHover);
  });

});

*/

/* Header - menu-mobile - открытие закрытие  */

document.addEventListener('DOMContentLoaded', () => {
  // Получаем элементы кнопок и блока меню
  const menuMobile = document.querySelector('.header-menu-mobile');
  const menuBtn = document.querySelector('.header-mobile__btn');
  const menuCloseBtn = document.querySelector('.header-menu-mobile__content-top__close');
  const body = document.body; // Получаем body

  // Обработчик для открытия меню
  menuBtn.addEventListener('click', () => {
    menuMobile.classList.add('active');
    body.style.overflow = 'hidden'; // Блокируем скролл
  });

  // Обработчик для закрытия меню
  menuCloseBtn.addEventListener('click', () => {
    menuMobile.classList.remove('active');
    body.style.overflow = ''; // Возвращаем скролл
  });
});

/* Header - menu-mobile - открытие карточек

document.addEventListener('DOMContentLoaded', () => {
  // Получаем все элементы меню
  const menuItems = document.querySelectorAll('.header-menu-mobile__content-menu__list-item');

  // Функция для установки начальной высоты элементов (высота кнопки)
  menuItems.forEach(item => {
    const button = item.querySelector('button');
    item.style.height = `${button.offsetHeight}px`;
  });

  // Функция для обработки кликов на кнопки
  menuItems.forEach(item => {
    const button = item.querySelector('button');

    button.addEventListener('click', () => {
      // Проверяем, активен ли элемент уже
      const isActive = item.classList.contains('active');

      // Убираем активный класс у всех элементов и сбрасываем их высоту
      menuItems.forEach(i => {
        i.classList.remove('active');
        const btn = i.querySelector('button');
        i.style.height = `${btn.offsetHeight}px`;
      });

      // Если текущий элемент не был активен, активируем его
      if (!isActive) {
        item.classList.add('active');

        // Получаем высоту кнопки и вложенного списка
        const itemList = item.querySelector('.header-menu-mobile__content-menu__list-item__list');
        const totalHeight = button.offsetHeight + (itemList ? itemList.offsetHeight : 0);

        // Устанавливаем новую высоту для активного элемента
        item.style.height = `${totalHeight}px`;
      }
    });
  });
});

*/

/* Header - открытие карточки корзина */

document.addEventListener("DOMContentLoaded", () => {
  // Получаем все элементы с классом кнопки корзины, блок корзины, контент корзины и кнопку перехода в корзину
  const basketButtons = document.querySelectorAll('.header-bottom__item-basket');
  const basket = document.querySelector('.header__basket');
  const basketContent = document.querySelector('.header__basket-content');
  const basketBtn = document.querySelector('.header__basket-btn');

  // Добавляем слушатель события для каждой кнопки корзины
  basketButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.stopPropagation(); // Останавливаем распространение события, чтобы избежать немедленного закрытия
      basket.classList.add('active'); // Добавляем класс active при клике на любую кнопку с классом
    });
  });

  // Добавляем слушатель события для ухода курсора с блока корзины
  basketContent.addEventListener('mouseleave', function () {
    basket.classList.remove('active'); // Убираем класс active
  });

  // Добавляем слушатель события для клика по кнопке перехода в корзину
  basketBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // Останавливаем распространение события, чтобы избежать немедленного закрытия
    basket.classList.remove('active'); // Убираем класс active
  });

  // Добавляем глобальный слушатель для клика за пределами корзины
  document.addEventListener('click', function (event) {
    // Проверяем, что клик произошел не внутри корзины
    if (!basketContent.contains(event.target)) {
      basket.classList.remove('active'); // Убираем класс active
    }
  });

});


/* Главная странциа - hero */

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./img/index/index-img.png", // Замените на пути к вашим изображениям
    "./img/index/index-img.png",
    "./img/index/index-img.png",
    "./img/index/index-img.png",
    "./img/index/index-img.png"
  ];

  const titles = [
    "Apple Vision Pro",
    "Apple MacBook Pro",
    "Apple iPhone 15",
    "Apple Watch Series 9",
    "Apple AirPods Pro"
  ];

  const descriptions = [
    "Добро пожаловать в новую пространственную эру.",
    "Мощь профессионального ноутбука.",
    "Новый уровень мобильной связи.",
    "Ваш персональный тренер на запястье.",
    "Чистота звука нового поколения."
  ];

  const buyLinks = [
    "https://example.com/apple-vision-pro",
    "https://example.com/macbook-pro",
    "https://example.com/iphone-15",
    "https://example.com/apple-watch-series-9",
    "https://example.com/airpods-pro"
  ];

  let currentIndex = 0;

  const imgElement = document.querySelector(".index-hero__content-images img");
  const titleElement = document.querySelector(".index-hero__content-info__block-title");
  const descriptionElement = document.querySelector(".index-hero__content-info__block-descr");
  const buyButton = document.querySelector(".index-hero__content-info__block-btn");
  const positionCircles = document.querySelectorAll(".index-hero__content-positions__circle");
  const prevButton = document.getElementById("index-hero__prev-btn");
  const nextButton = document.getElementById("index-hero__next-btn");

  let startX = 0;
  let endX = 0;

  // Функция плавного скрытия и смены текста
  function updateText(index) {
    titleElement.style.opacity = 0;
    descriptionElement.style.opacity = 0;
    setTimeout(() => {
      titleElement.textContent = titles[index];
      descriptionElement.textContent = descriptions[index];
      titleElement.style.opacity = 1;
      descriptionElement.style.opacity = 1;
    }, 400); // Совпадает с моментом завершения смены изображения
  }

  // Обновляем ссылку на кнопку "Купить"
  function updateBuyLink(index) {
    buyButton.setAttribute("data-link", buyLinks[index]);
  }

  // Анимация с плавным переходом изображения
  function animateSlide(direction) {
    imgElement.style.transition = "transform 0.8s ease-in-out, opacity 0.4s ease-in-out";
    imgElement.style.transform = `translateX(${direction === 'next' ? '-100%' : '100%'})`; // Сдвиг картинки
    imgElement.style.opacity = 0; // Исчезновение картинки
  }

  // Обновляем изображение и синхронизируем с текстом
  function changeSlide(newIndex, direction) {
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;

    animateSlide(direction); // Запуск анимации сдвига картинки

    setTimeout(() => {
      imgElement.src = images[newIndex]; // Меняем изображение
      imgElement.style.transition = "none"; // Отключаем анимацию для возврата
      imgElement.style.transform = `translateX(${direction === 'next' ? '100%' : '-100%'})`; // Меняем картинку за пределами видимости
      setTimeout(() => {
        imgElement.style.transition = "transform 0.8s ease-in-out, opacity 0.4s ease-in-out"; // Включаем анимацию
        imgElement.style.transform = "translateX(0)"; // Возвращаем картинку на место
        imgElement.style.opacity = 1; // Появление картинки
      }, 50); // Небольшая задержка перед возвращением картинки
      updateText(newIndex); // Обновляем текст одновременно
      updateBuyLink(newIndex); // Обновляем ссылку для кнопки
      currentIndex = newIndex;
      updatePositions(newIndex); // Обновляем позиции (кружки)
    }, 400); // Тайминг совпадает с окончанием исчезновения изображения
  }

  // Обновление активного индикатора (позиции)
  function updatePositions(index) {
    positionCircles.forEach((circle, idx) => {
      circle.classList.toggle("active", idx === index);
    });
  }

  // Обработчики для кнопок "предыдущий" и "следующий"
  prevButton.addEventListener("click", () => {
    changeSlide(currentIndex - 1, 'prev');
  });

  nextButton.addEventListener("click", () => {
    changeSlide(currentIndex + 1, 'next');
  });

  // Обработчик для клика по индикаторам (кружкам)
  positionCircles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      const direction = index > currentIndex ? 'next' : 'prev';
      changeSlide(index, direction);
    });
  });

  // Обработчик для свайпов
  imgElement.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
  });

  imgElement.addEventListener("touchmove", (event) => {
    endX = event.touches[0].clientX;
  });

  imgElement.addEventListener("touchend", () => {
    const threshold = 50; // Минимальное расстояние для регистрации свайпа
    if (startX - endX > threshold) {
      // Свайп влево
      changeSlide(currentIndex + 1, 'next');
    } else if (endX - startX > threshold) {
      // Свайп вправо
      changeSlide(currentIndex - 1, 'prev');
    }
  });

  // Инициализация первой картинки, контента и ссылки
  updateText(currentIndex);
  updateBuyLink(currentIndex);
  updatePositions(currentIndex);

  // Добавляем обработчик на кнопку "Купить"
  buyButton.addEventListener("click", () => {
    const link = buyButton.getAttribute("data-link");
    window.location.href = link; // Переход на нужную ссылку
  });
});

/* Главная странциа - reviews */

document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.getElementById('index-reviews__prev-btn');
  const nextBtn = document.getElementById('index-reviews__next-btn');
  const circles = document.querySelectorAll('.index-reviews__content-positions__circle');
  const reviews = document.querySelector('.index-reviews__content-reviews');
  const cards = document.querySelectorAll('.index-reviews__content-reviews__card');

  let currentIndex = 0; // Начальный индекс
  let cardWidth = cards[0].offsetWidth; // Ширина карточки
  let cardMargin = parseFloat(getComputedStyle(cards[0]).marginRight); // Автоматическое определение отступа

  let startX = 0; // Начальная позиция касания
  let endX = 0; // Конечная позиция касания

  // Функция для обновления активной карточки
  function updateActiveCard(index) {
    cardWidth = cards[0].offsetWidth; // Обновляем ширину карточки каждый раз
    cardMargin = parseFloat(getComputedStyle(cards[0]).marginRight); // Автоматическое обновление отступа
    const offset = index * (cardWidth + cardMargin); // Смещение с учетом ширины и отступа

    reviews.style.transform = `translateX(-${offset}px)`; // Смещаем контейнер на нужное количество пикселей

    // Удаляем классы active у всех кружков и карточек
    circles.forEach(circle => circle.classList.remove('active'));
    cards.forEach(card => card.classList.remove('active'));

    // Добавляем класс active к нужной карточке и кружку
    circles[index].classList.add('active');
    cards[index].classList.add('active');
  }

  // Обработчики для кнопки "Следующая"
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length; // Переход к следующей карточке (циклично)
    updateActiveCard(currentIndex); // Обновляем позицию
  });

  // Обработчики для кнопки "Предыдущая"
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Переход к предыдущей карточке (циклично)
    updateActiveCard(currentIndex); // Обновляем позицию
  });

  // Обработчики для кружков (индексации)
  circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      currentIndex = index; // Устанавливаем текущий индекс нажатого кружочка
      updateActiveCard(currentIndex); // Обновляем позицию
    });
  });

  // Обработчики для свайпов
  reviews.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
  });

  reviews.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
  });

  reviews.addEventListener('touchend', () => {
    const threshold = 50; // Минимальное расстояние для регистрации свайпа
    if (startX - endX > threshold) {
      // Свайп влево
      currentIndex = (currentIndex + 1) % cards.length;
      updateActiveCard(currentIndex);
    } else if (endX - startX > threshold) {
      // Свайп вправо
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateActiveCard(currentIndex);
    }
  });

  // Обновляем карточки при изменении размера окна
  window.addEventListener('resize', () => {
    updateActiveCard(currentIndex); // Пересчитываем смещение при изменении ширины окна
  });

  // Инициализация начального состояния
  updateActiveCard(currentIndex);
});

/* Главная странциа - stocks */

document.addEventListener('DOMContentLoaded', function() {
  // Находим элементы
  const prevBtn = document.getElementById('index-stocks__prev-btn');
  const nextBtn = document.getElementById('index-stocks__next-btn');
  const scrollContainer = document.querySelector('.index-stocks__content-cards');

  // Определяем ширину одного карточного блока и его правый отступ
  const card = document.querySelector('.index-stocks__content-cards__scroll');
  const cardStyle = getComputedStyle(card);
  const cardWidth = card.offsetWidth;
  const cardMarginRight = parseInt(cardStyle.marginRight);

  // Рассчитываем полный шаг прокрутки (ширина блока + правый отступ)
  const scrollStep = cardWidth + cardMarginRight;

  // Добавляем обработчик на кнопку "Следующий"
  nextBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({
          left: scrollStep, // Прокручиваем на ширину карточки плюс отступ
          behavior: 'smooth' // Плавная прокрутка
      });
  });

  // Добавляем обработчик на кнопку "Предыдущий"
  prevBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({
          left: -scrollStep, // Прокручиваем в обратную сторону
          behavior: 'smooth' // Плавная прокрутка
      });
  });
});

/* Главная странциа - stocks - mobile */

document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.getElementById('index-stocks__prev-btn');
  const nextBtn = document.getElementById('index-stocks__next-btn');
  const scrollContainer = document.querySelector('.index-stocks__content-mobile-cards__scroll');
  const cards = document.querySelectorAll('.index-stocks__content-mobile-cards__scroll-card');
  const circles = document.querySelectorAll('.index-stocks__content-mobile-cards__positions-circle');

  let currentIndex = 0; // Текущий индекс
  let cardWidth = cards[0].offsetWidth; // Ширина одной карточки
  let cardMargin = parseFloat(getComputedStyle(cards[0]).marginRight); // Отступ между карточками

  let startX = 0; // Начальная позиция касания
  let endX = 0; // Конечная позиция касания

  // Функция для обновления видимой карточки и индикаторов
  function updateVisibleCard(index) {
    cardWidth = cards[0].offsetWidth; // Обновляем ширину карточки при каждом вызове
    cardMargin = parseFloat(getComputedStyle(cards[0]).marginRight); // Обновляем отступ

    const offset = index * (cardWidth + cardMargin); // Рассчитываем смещение
    scrollContainer.style.transform = `translateX(-${offset}px)`; // Смещаем контейнер с карточками

    // Обновляем активные кружки
    circles.forEach((circle, idx) => {
      circle.classList.toggle('active', idx === index); // Активируем кружок, соответствующий текущей карточке
    });
  }

  // Обработчик для кнопки "Следующая"
  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, cards.length - 1); // Не превышаем количество карточек
    updateVisibleCard(currentIndex);
  });

  // Обработчик для кнопки "Предыдущая"
  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0); // Не уходим за пределы первой карточки
    updateVisibleCard(currentIndex);
  });

  // Обработчики для свайпов
  scrollContainer.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX; // Фиксируем начальное касание
  });

  scrollContainer.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX; // Отслеживаем движение пальца
  });

  scrollContainer.addEventListener('touchend', () => {
    const threshold = 50; // Минимальная дистанция для регистрации свайпа
    if (startX - endX > threshold) {
      // Свайп влево
      currentIndex = Math.min(currentIndex + 1, cards.length - 1); // Переход к следующей карточке
    } else if (endX - startX > threshold) {
      // Свайп вправо
      currentIndex = Math.max(currentIndex - 1, 0); // Переход к предыдущей карточке
    }
    updateVisibleCard(currentIndex); // Обновляем видимую карточку и индикаторы
  });

  // Добавляем обработчики для кружков, чтобы при нажатии происходил переход
  circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      currentIndex = index; // Устанавливаем текущий индекс на нажатый кружок
      updateVisibleCard(currentIndex); // Обновляем видимую карточку и индикаторы
    });
  });

  // Обновляем размеры карточек при изменении окна
  window.addEventListener('resize', () => {
    updateVisibleCard(currentIndex); // Пересчитываем смещение карточек при изменении размера окна
  });

  // Инициализация начальной позиции
  updateVisibleCard(currentIndex);
});



/* Каталог - верхний скролл */

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector('.catalog-content__scroll-content');
  const scrollContent = document.querySelector('.catalog-content__scroll-content__container');
  const prevButton = document.querySelector('.catalog-content__scroll-btn.prev');
  const nextButton = document.querySelector('.catalog-content__scroll-btn.next');
  const card = document.querySelector('.catalog-content__scroll-content__link');
  const progressBar = document.querySelector('.catalog-content__scroll-indicator__progress');

  // Рассчет ширины карточки с учетом отступов
  function getCardWidth() {
    const cardStyles = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth;
    const cardMarginRight = parseInt(cardStyles.marginRight);
    return cardWidth + cardMarginRight;
  }

  // Обновление прогресс-бара в зависимости от прокрутки
  function updateProgressBar() {
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const scrollLeft = scrollContainer.scrollLeft;

    // Рассчет процента прокрутки
    const scrollPercentage = (scrollLeft / maxScrollLeft) * 100;

    // Устанавливаем ширину полоски в зависимости от прокрутки
    progressBar.style.width = `${scrollPercentage}%`;
  }

  // Плавный скролл по нажатию на кнопки
  nextButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: getCardWidth(),
      behavior: 'smooth'
    });
  });

  prevButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -getCardWidth(),
      behavior: 'smooth'
    });
  });

  // Логика для свайпа
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const moveX = touch.pageX - startX;

    scrollContainer.scrollLeft = scrollLeft - moveX;
  });

  // Обновление прогресс-бара при скролле
  scrollContainer.addEventListener('scroll', updateProgressBar);

  // Инициализация полосы при загрузке
  updateProgressBar();


});

/* Каталог - изменение цены */

document.addEventListener('DOMContentLoaded', function () {
  const minSlider = document.getElementById('minPriceSlider');
  const maxSlider = document.getElementById('maxPriceSlider');
  const minPriceInput = document.getElementById('minPriceInput');
  const maxPriceInput = document.getElementById('maxPriceInput');
  const sliderTrack = document.querySelector('.price-slider-track');
  const minGap = 10000; // Минимальный разрыв между значениями
  const minPrice = 50000; // Минимальная цена
  const maxPrice = 250000; // Максимальная цена

  // Функция обновления ползунков и полей ввода
  function updateSlider() {
      let minValue = parseInt(minSlider.value);
      let maxValue = parseInt(maxSlider.value);

      if (maxValue - minValue <= minGap) {
          if (this.id === "minPriceSlider") {
              minSlider.value = maxValue - minGap;
          } else {
              maxSlider.value = minValue + minGap;
          }
      }

      minPriceInput.value = minSlider.value;
      maxPriceInput.value = maxSlider.value;
      updateTrackFill();
  }

  // Функция обновления трека (заполненной части слайдера)
  function updateTrackFill() {
      const percentMin = ((minSlider.value - minPrice) / (maxPrice - minPrice)) * 100;
      const percentMax = ((maxSlider.value - minPrice) / (maxPrice - minPrice)) * 100;
      sliderTrack.style.left = percentMin + '%';
      sliderTrack.style.right = (100 - percentMax) + '%';
  }

  // Функция обновления слайдера при изменении значения в поле ввода
  function updateFromInput() {
      let minValue = parseInt(minPriceInput.value);
      let maxValue = parseInt(maxPriceInput.value);

      // Проверка и исправление значения минимальной цены
      if (minValue < minPrice) {
          minValue = minPrice;
      } else if (minValue > maxSlider.value - minGap) {
          minValue = maxSlider.value - minGap;
      }

      // Проверка и исправление значения максимальной цены
      if (maxValue > maxPrice) {
          maxValue = maxPrice;
      } else if (maxValue < minSlider.value + minGap) {
          maxValue = minSlider.value + minGap;
      }

      // Обновляем ползунки в зависимости от новых значений
      minSlider.value = minValue;
      maxSlider.value = maxValue;

      updateTrackFill(); // Обновляем визуальное отображение трека
  }

  // Обработка событий на ползунках
  minSlider.addEventListener('input', updateSlider);
  maxSlider.addEventListener('input', updateSlider);

  // Обработка событий на полях ввода
  minPriceInput.addEventListener('change', updateFromInput);
  maxPriceInput.addEventListener('change', updateFromInput);

  // Инициализация трека слайдера при загрузке
  updateTrackFill();
});

/* Каталог - фильтр */

document.addEventListener("DOMContentLoaded", function() {
  // Находим все нужные элементы
  const filterBlocks = document.querySelectorAll('.catalog-content__products-bottom__filter-block');

  filterBlocks.forEach(filterBlock => {
    const topBlock = filterBlock.querySelector('.catalog-content__products-bottom__filter-block__top');
    const checkboxGroup = filterBlock.querySelector('.catalog-content__products-bottom__filter-block__ui-checkbox-group');
    const toggleButton = filterBlock.querySelector('.catalog-content__products-bottom__filter-block button');
    const checkboxes = checkboxGroup.getElementsByTagName('label');

    // Изначально устанавливаем высоту блока как высота topBlock
    filterBlock.style.height = `${topBlock.offsetHeight}px`;

    let isExpanded = false;
    let isFilterActive = false;
    let initialHeight = 0;

    // Функция для вычисления высоты первых N элементов
    function calculateHeightForFirstNItems(n) {
      let totalHeight = 0;
      for (let i = 0; i < n && i < checkboxes.length; i++) {
        totalHeight += checkboxes[i].offsetHeight;
      }
      return totalHeight;
    }

    // Функция для переключения высоты checkboxGroup
    function toggleCheckboxGroupHeight() {
      if (isExpanded) {
        // Свернуть до начальной высоты (первые 5 элементов)
        checkboxGroup.style.height = `${initialHeight}px`;
        toggleButton.textContent = 'Показать ещё';
      } else {
        // Развернуть до полной высоты всех элементов
        checkboxGroup.style.height = 'auto';
        toggleButton.textContent = 'Показать меньше';
      }
      isExpanded = !isExpanded;
      adjustFilterBlockHeight();
    }

    // Функция для изменения высоты всего filterBlock при изменении checkboxGroup
    function adjustFilterBlockHeight() {
      const totalHeight = topBlock.offsetHeight + checkboxGroup.offsetHeight + toggleButton.offsetHeight;
      filterBlock.style.height = `${totalHeight}px`;
    }

    // Изначально вычисляем высоту для первых 5 элементов и устанавливаем её
    initialHeight = calculateHeightForFirstNItems(5);
    checkboxGroup.style.height = `${initialHeight}px`;
    checkboxGroup.style.overflow = 'hidden';

    // Добавляем обработчик события клика на кнопку toggleButton
    toggleButton.addEventListener('click', toggleCheckboxGroupHeight);

    // Добавляем обработчик события клика на topBlock для раскрытия/скрытия блока
    topBlock.addEventListener('click', function() {
      if (!isFilterActive) {
        // Если блок не активен, увеличиваем его высоту
        adjustFilterBlockHeight();
        filterBlock.classList.add('active');
      } else {
        // Если блок уже активен, сворачиваем его до высоты topBlock
        filterBlock.style.height = `${topBlock.offsetHeight}px`;
        filterBlock.classList.remove('active');
      }
      isFilterActive = !isFilterActive;
    });
  });
});

/* Каталог - смена расположения карточек в списке */

document.addEventListener("DOMContentLoaded", function () {
  const change1Button = document.getElementById('change1');
    const change2Button = document.getElementById('change2');
    const lists = document.querySelectorAll('.catalog-content__products-bottom__cards-content__list');
    const container = document.querySelector('.catalog-content__products-bottom__cards-content');

    // Функция для обновления высоты контейнера в зависимости от блока с классом active
    function updateContainerHeight() {
      let activeList = null;

      // Ищем элемент с классом active
      lists.forEach(list => {
        if (list.classList.contains('active')) {
          activeList = list;
        }
      });

      // Если найден элемент с классом active, изменяем высоту контейнера
      if (activeList) {
        container.style.height = activeList.offsetHeight + 'px';
      } else {
        // Если нет активного элемента, сбрасываем высоту контейнера
        container.style.height = 'auto';
      }
    }

    // Клик по кнопке change1
    change1Button.addEventListener('click', () => {
      // Убираем класс change у всех списков
      lists.forEach(list => {
        list.classList.remove('change');
      });

      // Переключаем классы active на кнопках
      change1Button.classList.add('active');
      change2Button.classList.remove('active');

      // Обновляем высоту контейнера
      updateContainerHeight();
    });

    // Клик по кнопке change2
    change2Button.addEventListener('click', () => {
      // Добавляем класс change всем спискам
      lists.forEach(list => {
        list.classList.add('change');
      });

      // Переключаем классы active на кнопках
      change2Button.classList.add('active');
      change1Button.classList.remove('active');

      // Обновляем высоту контейнера
      updateContainerHeight();
    });

    // Инициализируем высоту контейнера при загрузке
    updateContainerHeight();
});

document.addEventListener("DOMContentLoaded", function () {
  const listBlocks = document.querySelectorAll(".catalog-content__products-bottom__cards-content__list");
  const pageButtons = document.querySelectorAll(".catalog-content__products-bottom__cards-pages__number");
  const prevButton = document.querySelector(".catalog-content__products-bottom__cards-pages__btn.prev");
  const nextButton = document.querySelector(".catalog-content__products-bottom__cards-pages__btn.next");
  const cardsContainer = document.querySelector(".catalog-content__products-bottom__cards-content");
  const maxVisiblePages = 4;
  let currentPage = 0;

  // Обновляем высоту родительского контейнера
  function updateContainerHeight() {
    const activeList = document.querySelector(".catalog-content__products-bottom__cards-content__list.active");
    cardsContainer.style.height = `${activeList.scrollHeight}px`;
  }

  // Обновляем видимые страницы (показываем максимум 4)
  function updateVisiblePages() {
    const totalPages = pageButtons.length;

    // Показываем только 4 страницы
    pageButtons.forEach((btn, index) => {
      btn.style.display = (index >= currentPage && index < currentPage + maxVisiblePages) ? "inline-block" : "none";
    });
  }

  // Активируем определённую страницу
  function activatePage(pageIndex) {
    // Убираем активный класс у всех блоков
    listBlocks.forEach((list) => list.classList.remove("active"));
    pageButtons.forEach((btn) => btn.classList.remove("active"));

    // Добавляем активный класс для выбранного блока и кнопки
    listBlocks[pageIndex].classList.add("active");
    pageButtons[pageIndex].classList.add("active");

    // Обновляем высоту контейнера
    updateContainerHeight();

    // Обновляем видимость страниц
    updateVisiblePages();
  }

  // Слушатели для кнопок страниц
  pageButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentPage = Math.min(index, pageButtons.length - maxVisiblePages);
      activatePage(index);
    });
  });

  // Слушатель для кнопки "Предыдущая"
  prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      activatePage(currentPage);
    }
  });

  // Слушатель для кнопки "Следующая"
  nextButton.addEventListener("click", () => {
    if (currentPage < pageButtons.length - 1) {
      currentPage++;
      activatePage(currentPage);
    }
  });

  // Инициализация
  activatePage(0);
});

/* Каталог - открытие окна с вариантами сортировки */

document.addEventListener('DOMContentLoaded', () => {
  const sortingElement = document.querySelector('.catalog-content__products-top__filter-sorting');
  const sortingButton = document.querySelector('.catalog-content__products-top__filter-sorting__btn');
  const sortingLinks = document.querySelectorAll('.catalog-content__products-top__filter-sorting__block a');

  // Добавляем обработчик на кнопку
  sortingButton.addEventListener('click', () => {
    sortingElement.classList.toggle('active'); // Добавляем или убираем класс active при клике
  });

  // Добавляем обработчик на ссылки
  sortingLinks.forEach(link => {
    link.addEventListener('click', () => {
      sortingElement.classList.remove('active'); // Убираем класс active при клике на любую ссылку
    });
  });
});

/* Каталог - открытие фильтра в мобильной версии */

document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы кнопок и блока
  const filterButton = document.getElementById('catalog-products-mobile-filter');
  const closeButton = document.getElementById('catalog-filter-closed');
  const filterBlock = document.querySelector('.catalog-content__products-bottom__filter');
  const body = document.body; // Получаем body для управления скроллом

  // Обработчик нажатия на кнопку "Фильтр"
  filterButton.addEventListener('click', () => {
    filterBlock.classList.add('active');
    body.style.overflow = 'hidden'; // Блокируем скролл
  });

  // Обработчик нажатия на кнопку "Закрыть"
  closeButton.addEventListener('click', () => {
    filterBlock.classList.remove('active');
    body.style.overflow = ''; // Восстанавливаем скролл
  });
});

/* Каталог - открытие окна с вариантами сортировки - mobile */

document.addEventListener('DOMContentLoaded', () => {
  const sortingElement = document.querySelector('.catalog-content__products-top-mobile__filter-sorting');
  const sortingButton = document.querySelector('.catalog-content__products-top-mobile__filter-sorting__btn');
  const sortingLinks = document.querySelectorAll('.catalog-content__products-top-mobile__filter-sorting__block a');

  // Добавляем обработчик на кнопку
  sortingButton.addEventListener('click', () => {
    sortingElement.classList.toggle('active'); // Добавляем или убираем класс active при клике
  });

  // Добавляем обработчик на ссылки
  sortingLinks.forEach(link => {
    link.addEventListener('click', () => {
      sortingElement.classList.remove('active'); // Убираем класс active при клике на любую ссылку
    });
  });
});



/* Карточка товара - прибавление значения */

document.addEventListener("DOMContentLoaded", function () {
   // Функция для изменения значения
   function updateProductCardValue(element, delta) {
    // Найти <p> с числовым значением
    const valueElement = element.querySelector('.productCard-hero__content-purchase__top-btns__volume-value');
    let currentValue = parseInt(valueElement.textContent);

    // Обновить значение (минимум 0)
    currentValue = Math.max(0, currentValue + delta);

    // Установить обновленное значение
    valueElement.textContent = currentValue;
  }

  // Добавить обработчики событий для всех элементов
  document.querySelectorAll('.productCard-hero__content-purchase__top-btns__volume').forEach(function(item) {
    // Кнопка уменьшения
    item.querySelector('.decrease').addEventListener('click', function() {
      updateProductCardValue(item, -1);
    });

    // Кнопка увеличения
    item.querySelector('.increase').addEventListener('click', function() {
      updateProductCardValue(item, 1);
    });
  });
});

/* Карточка товара - скролл изображений и перенос изображений для просмотра */

document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const scrollContainer = document.querySelector('.productCard-hero__content-images__container-scroll');
  const imageButtons = document.querySelectorAll('.productCard-hero__content-images__container-scroll button');
  const mainImageContainer = document.querySelector('.productCard-hero__content-images__img-container img');

  let scrollAmount = 0;
  const scrollStep = 100; // количество пикселей для скролла

  // Установка первого изображения как активного при загрузке страницы
  const firstImageSrc = imageButtons[0].querySelector('img').src;
  mainImageContainer.src = firstImageSrc;
  imageButtons[0].classList.add('active');

  // Автоматическое определение ширины и отступа кнопок
  function setButtonStyles() {
    const totalButtons = imageButtons.length;
    const containerWidth = scrollContainer.offsetWidth;
    const buttonWidth = Math.floor(containerWidth / totalButtons) - 10; // Ширина кнопки
    const marginRight = 10; // Отступ между кнопками

    imageButtons.forEach(button => {
      button.style.width = `${buttonWidth}px`;
      button.style.marginRight = `${marginRight}px`;
    });
  }

  // Вызов функции установки ширины и отступов при загрузке страницы
  setButtonStyles();

  // Функция скроллинга
  function scrollContent(direction) {
    if (direction === 'next') {
      scrollAmount += scrollStep;
    } else {
      scrollAmount -= scrollStep;
    }
    scrollContainer.scroll({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  // Привязка кнопок для скролла
  nextButton.addEventListener('click', () => scrollContent('next'));
  prevButton.addEventListener('click', () => scrollContent('prev'));

  // Обновление главного изображения и активация кнопки
  imageButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Убираем класс active у всех кнопок
      imageButtons.forEach(btn => btn.classList.remove('active'));

      // Устанавливаем выбранное изображение как основное
      const newSrc = this.querySelector('img').src;
      mainImageContainer.src = newSrc;

      // Добавляем класс active к нажатой кнопке
      this.classList.add('active');
    });
  });

  // Функция для отслеживания свайпов
  let isDown = false;
  let startX;
  let scrollLeft;

  // Обработка начала свайпа
  scrollContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  // Обработка окончания свайпа
  scrollContainer.addEventListener('touchend', () => {
    isDown = false;
  });

  // Обработка движения пальца
  scrollContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Ускорение скролла
    scrollContainer.scrollLeft = scrollLeft - walk;
  });

  // Пересчет размеров кнопок при изменении размера окна
  window.addEventListener('resize', setButtonStyles);
});

/* Карточка товара - изменение цвета */

document.addEventListener("DOMContentLoaded", function () {
    // Получаем все кнопки и блоки изображений
  const colorButtons = document.querySelectorAll('.productCard-hero__content-specifications__block-colors button');
  const imageBlocks = document.querySelectorAll('.productCard-hero__content-images__container-scroll__block');

  // Функция для удаления класса active у всех элементов
  function removeActiveClass(elements) {
    elements.forEach(element => {
      element.classList.remove('active');
    });
  }

  // Добавляем обработчики событий для каждой кнопки
  colorButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Убираем класс active у всех кнопок и блоков изображений
      removeActiveClass(colorButtons);
      removeActiveClass(imageBlocks);

      // Добавляем класс active выбранной кнопке и соответствующему блоку изображений
      button.classList.add('active');
      imageBlocks[index].classList.add('active');
    });
  });

});

/* Карточка товара - переключение активного окна  */

document.addEventListener("DOMContentLoaded", function () {
  // Находим все кнопки и блоки
  const buttons = document.querySelectorAll('.productCard-information__btns button');
  const contentBlocks = document.querySelectorAll('.productCard-information__content-block');

  // Функция для переключения классов active
  function toggleActiveClass(targetId) {
    // Убираем класс active у всех кнопок и блоков
    buttons.forEach(button => button.classList.remove('active'));
    contentBlocks.forEach(block => block.classList.remove('active'));

    // Добавляем класс active выбранной кнопке
    const activeButton = document.getElementById(targetId);
    activeButton.classList.add('active');

    // Добавляем класс active соответствующему блоку
    const activeBlock = document.querySelector(`.productCard-information__content-block[data-target="${targetId}"]`);
    activeBlock.classList.add('active');
  }

  // Назначаем обработчик событий для каждой кнопки
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      toggleActiveClass(button.id);
    });
  });

});

/* Карточка товара - похожие товары */

document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("similarProducts-content__btn-prev");
  const nextBtn = document.getElementById("similarProducts-content__btn-next");
  const list = document.querySelector(".similarProducts-content__list");
  const items = document.querySelectorAll(".similarProducts-content__list-item");
  const progressBar = document.querySelector(".similarProducts-content__position-progress");

  let currentIndex = 0;
  const itemWidth = items[0].offsetWidth; // автоматическая ширина карточки
  const totalItems = items.length;
  const maxIndex = totalItems - 1;

  // Обновление позиции прогресс-бара
  function updateProgress() {
    const progress = ((currentIndex + 1) / totalItems) * 100;
    progressBar.style.width = `${progress}%`;
  }

  // Листать вперед
  nextBtn.addEventListener("click", function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      list.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
      list.style.transition = "transform 0.5s ease";
    }
    updateProgress();
  });

  // Листать назад
  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      list.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
      list.style.transition = "transform 0.5s ease";
    }
    updateProgress();
  });

  // Листание свайпом (для мобильных устройств)
  let startX = 0;
  let isDragging = false;

  list.addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
    isDragging = true;
  });

  list.addEventListener("touchmove", function (event) {
    if (!isDragging) return;
    const diffX = startX - event.touches[0].clientX;

    // Листать только если свайп длиннее 50px
    if (diffX > 50) {
      nextBtn.click();
      isDragging = false;
    } else if (diffX < -50) {
      prevBtn.click();
      isDragging = false;
    }
  });

  list.addEventListener("touchend", function () {
    isDragging = false;
  });

  // Инициализация прогресс-бара
  updateProgress();
});



/* Корзина - изменение значения в поле */

document.addEventListener("DOMContentLoaded", function () {
  // Функция для изменения значения
  function updateValue(element, delta) {
    // Найти <p> с числовым значением
    const valueElement = element.querySelector('.basket-hero__content-products__list-item__article-volume__value');
    let currentValue = parseInt(valueElement.textContent);

    // Обновить значение (минимум 0)
    currentValue = Math.max(0, currentValue + delta);

    // Установить обновленное значение
    valueElement.textContent = currentValue;
  }

  // Добавить обработчики событий для всех элементов
  document.querySelectorAll('.basket-hero__content-products__list-item__article-volume').forEach(function(item) {
    // Кнопка уменьшения
    item.querySelector('.decrease').addEventListener('click', function() {
      updateValue(item, -1);
    });

    // Кнопка увеличения
    item.querySelector('.increase').addEventListener('click', function() {
      updateValue(item, +1);
    });
  });
});



/* Оформление заказа - карта */

document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init);

  function init() {
      // Создаем карту, центрированную на начальной точке
      var map = new ymaps.Map("map", {
          center: [55.751574, 37.573856], // Москва
          zoom: 10
      });

      // Добавляем маркеры на карту
      var places = [
          {
              coords: [55.751574, 37.573856],
              name: 'Красная площадь',
              description: 'Одна из самых известных площадей в мире.'
          },
          {
              coords: [55.752023, 37.617499],
              name: 'Мавзолей Ленина',
              description: 'Мавзолей Владимира Ленина на Красной площади.'
          },
          {
              coords: [55.757777, 37.615631],
              name: 'Большой театр',
              description: 'Национальный театр оперы и балета.'
          }
      ];

      // Функция для создания и добавления маркера
      function addPlace(place) {
          var placemark = new ymaps.Placemark(place.coords, {
              // Устанавливаем контент для балуна (всплывающего окна)
              balloonContentHeader: `<strong>${place.name}</strong>`,
              balloonContentBody: `<p>${place.description}</p>`,
              balloonContentFooter: 'Нажмите на маркер для отображения информации',
              hintContent: place.name // Подсказка при наведении
          }, {
              preset: 'islands#icon',
              iconColor: '#0095b6'
          });

          // Добавляем событие на клик по метке
          placemark.events.add('click', function () {
              map.setCenter(place.coords, 14, {
                  checkZoomRange: true
              });
              // Открываем балун на текущем объекте
              placemark.balloon.open();
          });

          // Добавляем метку на карту
          map.geoObjects.add(placemark);
      }

      // Добавляем все места на карту
      places.forEach(addPlace);
  }
});

/* Оформление заказа - отображение блоков */

document.addEventListener('DOMContentLoaded', function () {
  const pickupBtn = document.getElementById('pickup');
  const addressBtn = document.getElementById('address');
  const mapBlock = document.querySelector('.makingOrder-hero__content-making__block-delivery__map');
  const addressBlock = document.querySelector('.makingOrder-hero__content-making__block-delivery__address');
  const deliveryBlock = document.querySelector('.makingOrder-hero__content-making__block-delivery');
  const adressInput = document.querySelector('#makingOrder-adress'); // Исправил на правильный селектор
  const floorInput = document.getElementById('makingOrder-floor');

  // Функция для обновления высоты блока
  function updateDeliveryBlockHeight() {
      const activeBlock = deliveryBlock.querySelector('.active');
      if (activeBlock) {
          deliveryBlock.style.height = activeBlock.offsetHeight + 'px';
      } else {
          deliveryBlock.style.height = '0px';
      }
  }

  // Функция для добавления/удаления атрибута required
  function toggleRequiredFields(isRequired) {
      if (isRequired) {
          adressInput.setAttribute('required', 'required');
          floorInput.setAttribute('required', 'required');
      } else {
          adressInput.removeAttribute('required');
          floorInput.removeAttribute('required');
      }
  }

  // Основной код для больших экранов
  function initLargeScreenListeners() {
      // Обработка нажатия кнопки Самовывоз
      pickupBtn.addEventListener('click', largeScreenPickupHandler);

      // Обработка нажатия кнопки Доставка
      addressBtn.addEventListener('click', largeScreenAddressHandler);

      // Инициализация высоты блока при загрузке страницы
      updateDeliveryBlockHeight();
  }

  function largeScreenPickupHandler() {
      pickupBtn.classList.add('active');
      addressBtn.classList.remove('active');
      mapBlock.classList.add('active');
      addressBlock.classList.remove('active');

      // Убираем required с полей для адреса и этажа
      toggleRequiredFields(false);

      // Обновляем высоту с небольшой задержкой для того, чтобы классы применились корректно
      setTimeout(updateDeliveryBlockHeight, 0);
  }

  function largeScreenAddressHandler() {
      addressBtn.classList.add('active');
      pickupBtn.classList.remove('active');
      mapBlock.classList.remove('active');
      addressBlock.classList.add('active');

      // Добавляем required к полям для адреса и этажа
      toggleRequiredFields(true);

      // Обновляем высоту с небольшой задержкой для того, чтобы классы применились корректно
      setTimeout(updateDeliveryBlockHeight, 0);
  }

  // Код для экранов меньше 768px
  function initSmallScreenListeners() {
      // Удаляем классы при нажатии на кнопки для мобильной версии
      pickupBtn.addEventListener('click', smallScreenPickupHandler);
      addressBtn.addEventListener('click', smallScreenAddressHandler);
  }

  function smallScreenPickupHandler() {
      pickupBtn.classList.add('active');
      addressBtn.classList.remove('active');
      deliveryBlock.classList.remove('active');

      // Убираем required с полей для адреса и этажа
      toggleRequiredFields(false);
  }

  function smallScreenAddressHandler() {
      addressBtn.classList.add('active');
      pickupBtn.classList.remove('active');
      deliveryBlock.classList.add('active');

      // Добавляем required к полям для адреса и этажа
      toggleRequiredFields(true);
  }

  // Функция для очистки всех слушателей, чтобы не было конфликтов
  function removeAllListeners() {
      pickupBtn.removeEventListener('click', largeScreenPickupHandler);
      addressBtn.removeEventListener('click', largeScreenAddressHandler);
      pickupBtn.removeEventListener('click', smallScreenPickupHandler);
      addressBtn.removeEventListener('click', smallScreenAddressHandler);
  }

  // Проверка ширины экрана
  function checkScreenWidth() {
      const screenWidth = window.innerWidth;

      // Очищаем слушатели перед инициализацией новых
      removeAllListeners();

      if (screenWidth < 768) {
          // Код для маленьких экранов
          deliveryBlock.style.height = 'auto'; // Убираем контроль высоты
          initSmallScreenListeners();
      } else {
          // Код для больших экранов
          initLargeScreenListeners();
          setTimeout(updateDeliveryBlockHeight, 0); // Устанавливаем высоту при больших экранах
      }
  }

  // Инициализация кода при загрузке страницы
  checkScreenWidth();

  // Обработка изменения размера экрана
  window.addEventListener('resize', checkScreenWidth);
});


/* Оформление заказа - input */

document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('makingOrder-name');
  const telInput = document.getElementById('makingOrder-tel');
  const emailInput = document.getElementById('makingOrder-email');
  const adressInput = document.getElementById('makingOrder-adress');
  const floorInput = document.getElementById('makingOrder-floor');

  // Добавляем слушатель на ввод для телефона
  telInput.addEventListener('focus', function () {
    // Если поле пустое, добавляем +7 при фокусе
    if (!this.value) {
        this.value = '+7 ';
    }
  });

  telInput.addEventListener('input', function () {
    // Убираем все, кроме цифр
    let numbersOnly = this.value.replace(/[^\d]/g, '');

    // Добавляем +7 в начало
    if (numbersOnly.length > 1 && !numbersOnly.startsWith('7')) {
        numbersOnly = '7' + numbersOnly.slice(1);
    }

    // Применяем маску: +7 XXX XXX XX XX
    if (numbersOnly.length > 1) {
        const formattedNumber = `+7 ${numbersOnly.substring(1, 4)} ${numbersOnly.substring(4, 7)} ${numbersOnly.substring(7, 9)} ${numbersOnly.substring(9, 11)}`;
        this.value = formattedNumber.trim();
    }
  });

  // Добавляем слушатель на ввод для имени
  nameInput.addEventListener('input', function () {
      this.value = this.value.replace(/[^а-яА-ЯёЁa-zA-Z\s]/g, ''); // Разрешаем только буквы и пробелы
  });

  document.getElementById('makingOrder-hero__submitButton').addEventListener('click', function () {
      // Функция для проверки и окрашивания рамки
      function validateInput(input, regex = null) {
          if (!input.value.trim() || (regex && !regex.test(input.value))) {
              input.style.border = '1px solid red';
          } else {
              input.style.border = '';
          }
      }

      // Валидация полей
      validateInput(nameInput); // Проверка имени
      validateInput(telInput, /^\+7 \d{3} \d{3} \d{2} \d{2}$/);  // Проверка телефона с маской
      validateInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);    // Проверка email
      validateInput(adressInput); // Проверка адреса
      validateInput(floorInput, /^[1-9]\d*$/); // Проверка этажа (должен быть положительным числом)

      // Проверка на пустоту для этажей
      if (!floorInput.value.trim()) {
          floorInput.style.border = '1px solid red'; // Окрашиваем в красный, если поле пустое
      } else {
          floorInput.style.border = ''; // Убираем красный, если заполнено
      }
  });
});



/* СТраница Рассрочка */

document.addEventListener('DOMContentLoaded', function () {
  const devices = document.querySelectorAll('.installmentPlan-hero__content-devices__selector-device');
  const movingLine = document.getElementById('moving-line');
  const formsContainer = document.querySelector('.installmentPlan-hero__content-devices__forms');
  const contents = document.querySelectorAll('.installmentPlan-hero__content-devices__forms-form');

  // Функция для установки динамической высоты контейнера
  function updateContainerHeight(activeContent) {
      const contentHeight = activeContent.offsetHeight; // Получаем высоту активного блока
      formsContainer.style.height = `${contentHeight}px`; // Устанавливаем высоту контейнера
  }

  devices.forEach((device, index) => {
      device.addEventListener('click', () => {
          // Удаляем активный класс у всех устройств
          devices.forEach(d => d.classList.remove('active'));
          // Добавляем активный класс к нажатому устройству
          device.classList.add('active');

          // Перемещаем внутреннюю линию
          movingLine.style.left = `${index * 25}%`; // Перемещение в процентах

          // Отображаем соответствующий контент
          contents.forEach(content => content.classList.remove('active'));
          const targetContent = document.getElementById(device.getAttribute('data-target'));
          targetContent.classList.add('active');

          // Обновляем высоту контейнера
          updateContainerHeight(targetContent);
      });
  });

  // Устанавливаем начальную высоту контейнера
  const initialActiveContent = document.querySelector('.installmentPlan-hero__content-devices__forms-form.active');
  if (initialActiveContent) {
      updateContainerHeight(initialActiveContent);
  }
});

/* Секция - частые вопросы */

document.addEventListener('DOMContentLoaded', function() {
  // Получаем все элементы заголовков FAQ
  const faqHeaders = document.querySelectorAll('.questions__content-faq__item-header');

  faqHeaders.forEach(header => {
    // Добавляем обработчик события клика на каждый заголовок
    header.addEventListener('click', function() {
      // Получаем родительский элемент FAQ item
      const faqItem = header.parentElement;
      // Получаем блок с ответом
      const answer = faqItem.querySelector('.questions__content-faq__item-answer');

      // Если блок уже открыт (класс active), то сворачиваем его
      if (faqItem.classList.contains('active')) {
        faqItem.style.height = `${header.offsetHeight}px`; // Ставим высоту только заголовка
        faqItem.classList.remove('active');
      } else {
        // Закрываем все остальные блоки, если нужно сделать аккордеон
        document.querySelectorAll('.questions__content-faq__item.active').forEach(activeItem => {
          activeItem.style.height = `${activeItem.querySelector('.questions__content-faq__item-header').offsetHeight}px`;
          activeItem.classList.remove('active');
        });

        // Получаем полную высоту: высота заголовка + высота ответа
        const fullHeight = header.offsetHeight + answer.scrollHeight;
        // Задаем новую высоту блоку FAQ item
        faqItem.style.height = `${fullHeight}px`;
        // Добавляем класс active
        faqItem.classList.add('active');
      }
    });
  });

  // Устанавливаем начальную высоту для всех блоков FAQ item
  document.querySelectorAll('.questions__content-faq__item').forEach(item => {
    const header = item.querySelector('.questions__content-faq__item-header');
    item.style.height = `${header.offsetHeight}px`;
  });
});

/* Страница расрочка - форма */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('installmentForm');
  const nameInput = document.getElementById('installmentPlan__pop-app__name');
  const phoneInput = document.getElementById('installmentPlan__pop-app__tel');
  const checkbox = document.getElementById('checkbox');

  // Устанавливаем +7 автоматически при фокусе на поле телефона
  phoneInput.addEventListener('focus', function () {
      if (!phoneInput.value) {
          phoneInput.value = '+7';
      }
  });

  // Блокируем ввод любых символов кроме цифр после +7
  phoneInput.addEventListener('input', function () {
      let numbersOnly = phoneInput.value.replace(/[^\d]/g, '');  // Удаляем все, кроме цифр

      if (!numbersOnly.startsWith('7')) {
          numbersOnly = '7' + numbersOnly.substring(1);
      }

      // Ограничиваем количество символов до 11 (1 символ 7 + 10 цифр)
      if (numbersOnly.length > 11) {
          numbersOnly = numbersOnly.substring(0, 11);
      }

      phoneInput.value = '+7' + numbersOnly.substring(1);  // Возвращаем значение с форматом +7
  });

  // Валидация формы перед отправкой
  form.addEventListener('submit', function (event) {
      let isValid = true;

      // Проверка имени: поле не должно быть пустым и не должно содержать цифры
      const nameRegex = /^[А-Яа-яЁёA-Za-z\s]+$/;  // Регулярное выражение для проверки только букв и пробелов
      if (nameInput.value.trim() === '' || !nameRegex.test(nameInput.value)) {
          nameInput.classList.add('error');  // Добавляем красный бордер
          isValid = false;
      } else {
          nameInput.classList.remove('error');
      }

      // Проверка телефона: точно 12 символов (+7 и 10 цифр)
      const phoneRegex = /^\+7\d{10}$/;
      if (!phoneRegex.test(phoneInput.value)) {
          phoneInput.classList.add('error');  // Добавляем красный бордер
          isValid = false;
      } else {
          phoneInput.classList.remove('error');
      }

      // Если есть ошибки, отменяем отправку формы
      if (!isValid) {
          event.preventDefault();  // Отменяем отправку
      }
  });
});



/* Trade-in & Выкуп техники & Ремонт - переключение формы */

document.addEventListener('DOMContentLoaded', function () {
  const devices = document.querySelectorAll('.choice-hero__content-devices__selector-device');
  const movingLine = document.getElementById('choice-moving-line');
  const formsContainer = document.querySelector('.choice-hero__content-devices__forms');
  const contents = document.querySelectorAll('.choice-hero__content-devices__forms-form');

  // Функция для установки динамической высоты контейнера
  function updateContainerHeight(activeContent) {
      const contentHeight = activeContent.offsetHeight; // Получаем высоту активного блока
      formsContainer.style.height = `${contentHeight}px`; // Устанавливаем высоту контейнера
  }

  // Функция для перемещения линии
  function moveLine(index) {
      const deviceWidth = devices[0].offsetWidth; // Ширина одного устройства
      const movingLineWidth = movingLine.offsetWidth; // Ширина линии
      const containerWidth = devices.length * deviceWidth; // Общая ширина всех устройств

      const availableWidth = containerWidth - movingLineWidth; // Доступная ширина для перемещения
      const moveDistance = (availableWidth / (devices.length - 1)) * index; // Вычисляем расстояние перемещения
      movingLine.style.left = `${moveDistance}px`; // Перемещаем линию в пикселях
  }

  devices.forEach((device, index) => {
      device.addEventListener('click', () => {
          // Удаляем активный класс у всех устройств
          devices.forEach(d => d.classList.remove('active'));
          // Добавляем активный класс к нажатому устройству
          device.classList.add('active');

          // Перемещаем внутреннюю линию
          moveLine(index);

          // Отображаем соответствующий контент
          contents.forEach(content => content.classList.remove('active'));
          const targetContent = document.getElementById(device.getAttribute('data-target'));
          targetContent.classList.add('active');

          // Обновляем высоту контейнера
          updateContainerHeight(targetContent);
      });
  });

  // Устанавливаем начальную высоту контейнера
  const initialActiveContent = document.querySelector('.choice-hero__content-devices__forms-form.active');
  if (initialActiveContent) {
      updateContainerHeight(initialActiveContent);
  }
});


/* Trade-in - форма */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('tradeIn-form');
  const nameInput = document.getElementById('tradeIn__pop-app__name');
  const phoneInput = document.getElementById('tradeIn__pop-app__tel');
  const checkbox = document.getElementById('checkbox');

  // Устанавливаем +7 автоматически при фокусе на поле телефона
  phoneInput.addEventListener('focus', function () {
      if (!phoneInput.value) {
          phoneInput.value = '+7';
      }
  });

  // Блокируем ввод любых символов кроме цифр после +7
  phoneInput.addEventListener('input', function () {
      let numbersOnly = phoneInput.value.replace(/[^\d]/g, '');  // Удаляем все, кроме цифр

      if (!numbersOnly.startsWith('7')) {
          numbersOnly = '7' + numbersOnly.substring(1);
      }

      // Ограничиваем количество символов до 11 (1 символ 7 + 10 цифр)
      if (numbersOnly.length > 11) {
          numbersOnly = numbersOnly.substring(0, 11);
      }

      phoneInput.value = '+7' + numbersOnly.substring(1);  // Возвращаем значение с форматом +7
  });

  // Валидация формы перед отправкой
  form.addEventListener('submit', function (event) {
      let isValid = true;

      // Проверка имени: поле не должно быть пустым и не должно содержать цифры
      const nameRegex = /^[А-Яа-яЁёA-Za-z\s]+$/;  // Регулярное выражение для проверки только букв и пробелов
      if (nameInput.value.trim() === '' || !nameRegex.test(nameInput.value)) {
          nameInput.classList.add('error');  // Добавляем красный бордер
          isValid = false;
      } else {
          nameInput.classList.remove('error');
      }

      // Проверка телефона: точно 12 символов (+7 и 10 цифр)
      const phoneRegex = /^\+7\d{10}$/;
      if (!phoneRegex.test(phoneInput.value)) {
          phoneInput.classList.add('error');  // Добавляем красный бордер
          isValid = false;
      } else {
          phoneInput.classList.remove('error');
      }

      // Если есть ошибки, отменяем отправку формы
      if (!isValid) {
          event.preventDefault();  // Отменяем отправку
      }
  });
});


/* Выкуп техники - выьор устройства */

document.addEventListener('DOMContentLoaded', function() {
  // Находим элементы на странице
  const mobileButton = document.querySelector('.choice-hero__content-devices__selector-mobile');
  const deviceButtons = document.querySelectorAll('.choice-hero__content-devices__selector-device');
  const selectorBlock = document.querySelector('.choice-hero__content-devices__selector');

  // Переключаем класс active при нажатии на mobileButton
  mobileButton.addEventListener('click', function() {
      selectorBlock.classList.toggle('active');
  });

  // Убираем класс active при нажатии на любой элемент с классом choice-hero__content-devices__selector-device
  deviceButtons.forEach(function(deviceButton) {
      deviceButton.addEventListener('click', function() {
          selectorBlock.classList.remove('active');
      });
  });
});



/* Ремонт - появление списка с видом ремонта */

document.addEventListener('DOMContentLoaded', function () {
  // Функция для инициализации работы с select и choice по id
  function setupForm(selectId, choiceId, formId) {
    const selectElement = document.getElementById(selectId);
    const repairChoiceBlock = document.getElementById(choiceId);
    const formBlock = document.getElementById(formId);

    // Добавляем обработчик событий на select
    selectElement.addEventListener('change', function () {
      // Добавляем класс active
      repairChoiceBlock.classList.add('active');

      // Получаем высоту repairChoiceBlock
      const repairChoiceHeight = repairChoiceBlock.scrollHeight;

      // Устанавливаем высоту formBlock
      formBlock.style.height = `${repairChoiceHeight + 145}px`;
    });
  }

  // Инициализируем работу для каждого блока, задавая уникальные ID
  setupForm('repair-iphone-device', 'repair-choice-iphone', 'repair-form');
  setupForm('repair-macbook-device', 'repair-choice-macbook', 'repair-form');
  setupForm('repair-imac-device', 'repair-choice-imac', 'repair-form');
  setupForm('repair-watch-device', 'repair-choice-watch', 'repair-form');

  // Добавляйте новые вызовы setupForm с новыми ID для дополнительных блоков
});

/* Ремонт - форма */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('repairForm');
  const nameInput = document.getElementById('repair__pop-app__name');
  const phoneInput = document.getElementById('repair__pop-app__tel');
  const checkbox = document.getElementById('checkbox');

  // Устанавливаем +7 автоматически при фокусе на поле телефона
  phoneInput.addEventListener('focus', function () {
      if (!phoneInput.value) {
          phoneInput.value = '+7';
      }
  });

  // Блокируем ввод любых символов кроме цифр после +7
  phoneInput.addEventListener('input', function () {
      let numbersOnly = phoneInput.value.replace(/[^\d]/g, '');  // Удаляем все, кроме цифр

      if (!numbersOnly.startsWith('7')) {
          numbersOnly = '7' + numbersOnly.substring(1);
      }

      // Ограничиваем количество символов до 11 (1 символ 7 + 10 цифр)
      if (numbersOnly.length > 11) {
          numbersOnly = numbersOnly.substring(0, 11);
      }

      phoneInput.value = '+7' + numbersOnly.substring(1);  // Возвращаем значение с форматом +7
  });

  // Валидация формы перед отправкой
  form.addEventListener('submit', function (event) {
      let isValid = true;

      // Проверка имени: поле не должно быть пустым и не должно содержать цифры
      const nameRegex = /^[А-Яа-яЁёA-Za-z\s]+$/;  // Регулярное выражение для проверки только букв и пробелов
      if (nameInput.value.trim() === '' || !nameRegex.test(nameInput.value)) {
          nameInput.classList.add('error');  // Добавляем красный бордер
          isValid = false;
      } else {
          nameInput.classList.remove('error');
      }

      // Проверка телефона: точно 12 символов (+7 и 10 цифр)
      const phoneRegex = /^\+7\d{10}$/;
      if (!phoneRegex.test(phoneInput.value)) {
          phoneInput.classList.add('error');  // Добавляем красный бордер
          isValid = false;
      } else {
          phoneInput.classList.remove('error');
      }

      // Если есть ошибки, отменяем отправку формы
      if (!isValid) {
          event.preventDefault();  // Отменяем отправку
      }
  });
});



/* Б/У техника - подстраивание ширины */

document.addEventListener("DOMContentLoaded", function() {
  const block1 = document.querySelector('.usedEquipment-catalog .catalog-content__products-bottom__cards');
  const block2 = document.querySelector('.usedEquipment-catalog .catalog-content__products-top');

  function syncBlockWidth() {
      // Синхронизация ширины второго блока с первым
      block2.style.width = block1.offsetWidth + 'px';

      // Используем requestAnimationFrame для постоянного отслеживания ширины
      requestAnimationFrame(syncBlockWidth);
  }

  // Запускаем синхронизацию ширины
  syncBlockWidth();

  // Слушатель события resize для обновления ширины при изменении окна
  window.addEventListener('resize', syncBlockWidth);
});

/* Личныый кабинет - переключение блоков

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.personalAccount-hero__content-btns button');
  const blocks = document.querySelectorAll('.personalAccount-hero__content-bloks > div');
  const contentContainer = document.querySelector('.personalAccount-hero__content-bloks');

  let activeBlock = document.querySelector('.personalAccount-hero__content-bloks > div.active');

  // Функция для обновления высоты контейнера в зависимости от активного блока
  function updateContainerHeight() {
    const blockHeight = activeBlock.offsetHeight;
    contentContainer.style.height = blockHeight + 'px';
  }

  // Создаем наблюдатель за изменениями размеров активного блока
  const resizeObserver = new ResizeObserver(() => {
    updateContainerHeight();
  });

  // Создаем наблюдатель за изменениями в содержимом активного блока
  const mutationObserver = new MutationObserver(() => {
    updateContainerHeight();
  });

  // Функция для переключения активных классов
  function handleClick(event) {
    const targetId = event.target.id;

    // Удаляем классы 'active' у всех кнопок и блоков
    buttons.forEach(button => button.classList.remove('active'));
    blocks.forEach(block => block.classList.remove('active'));

    // Останавливаем наблюдатели перед переключением блоков
    resizeObserver.disconnect();
    mutationObserver.disconnect();

    // Добавляем класс 'active' к нажатой кнопке
    event.target.classList.add('active');

    // Находим блок с атрибутом data-target, который соответствует нажатой кнопке
    activeBlock = document.querySelector(`.personalAccount-hero__content-bloks > div[data-target="${targetId}"]`);

    // Добавляем класс 'active' к соответствующему блоку
    activeBlock.classList.add('active');

    // Обновляем высоту контейнера
    updateContainerHeight();

    // Начинаем наблюдать за новым активным блоком
    resizeObserver.observe(activeBlock);
    mutationObserver.observe(activeBlock, { childList: true, subtree: true });
  }

  // Назначаем обработчики событий на все кнопки
  buttons.forEach(button => {
    button.addEventListener('click', handleClick);
  });

  // Устанавливаем начальную высоту контейнера после полной отрисовки страницы
  requestAnimationFrame(() => {
    if (activeBlock) {
      updateContainerHeight();
      // Начинаем отслеживать изменения размера и содержимого активного блока
      resizeObserver.observe(activeBlock);
      mutationObserver.observe(activeBlock, { childList: true, subtree: true });
    }
  });
});

*/

/* Личныый кабинет - form */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".personalAccount-hero__content-bloks__data-bottom__form");
  const firstName = document.getElementById("personalAccount-firstName");
  const secondName = document.getElementById("personalAccount-secondName");
  const email = document.getElementById("personalAccount-email");
  const tel = document.getElementById("personalAccount-tel");
  const birthDate = document.getElementById("personalAccount-birth-date");
  const password1 = document.getElementById("personalAccount-password1");
  const password2 = document.getElementById("personalAccount-password2");

  // Функция для проверки корректности поля
  function validateField(field, condition, message) {
    if (condition) {
      field.style.border = "1px solid red";
      return false;
    } else {
      field.style.border = "1px solid #ccc";
      return true;
    }
  }

  // Проверка на ввод только букв
  function onlyLetters(input) {
    input.value = input.value.replace(/[^а-яА-ЯёЁa-zA-Z]/g, "");
  }

  // Форматирование телефона: добавление +7 и маски +7 XXX XXX XX XX
  function formatTel(input) {
    let numbersOnly = input.value.replace(/[^\d]/g, '');

    // Добавляем +7 в начало, если длина больше 1 и не начинается с 7
    if (numbersOnly.length > 1 && !numbersOnly.startsWith('7')) {
      numbersOnly = '7' + numbersOnly.slice(1);
    }

    // Применяем маску: +7 XXX XXX XX XX
    if (numbersOnly.length > 1) {
      const formattedNumber = `+7 ${numbersOnly.substring(1, 4)} ${numbersOnly.substring(4, 7)} ${numbersOnly.substring(7, 9)} ${numbersOnly.substring(9, 11)}`;
      input.value = formattedNumber.trim();
    }
  }

  // Проверка формы перед отправкой
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Валидация имени (только буквы и обязательное поле)
    onlyLetters(firstName);
    isValid &= validateField(firstName, !firstName.value, "Введите имя");

    // Валидация фамилии (только буквы и обязательное поле)
    onlyLetters(secondName);
    isValid &= validateField(secondName, !secondName.value, "Введите фамилию");

    // Валидация email (обязательное поле)
    isValid &= validateField(email, !email.value || !email.validity.valid, "Введите корректный email");

    // Валидация телефона (обязательное поле и правильный формат)
    formatTel(tel);
    isValid &= validateField(tel, !tel.value || tel.value.length < 16, "Введите корректный телефон");

    // Проверка совпадения паролей
    isValid &= validateField(password1, !password1.value, "Введите пароль");
    isValid &= validateField(password2, password1.value !== password2.value, "Пароли не совпадают");

    // Если форма валидна, то отправляем
    if (isValid) {
      form.submit();
    }
  });

  // Ограничение на ввод только цифр в поле даты
  birthDate.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });

  // Привязка обработчиков на ввод в поля Имя и Фамилия для проверки только букв
  firstName.addEventListener("input", function () {
    onlyLetters(this);
  });

  secondName.addEventListener("input", function () {
    onlyLetters(this);
  });

  // Привязка обработчика к полю Телефон для автоподстановки +7 и форматирования
  tel.addEventListener("input", function () {
    formatTel(this);
  });
});


/* Личныый кабинет - form - смена блоков */

document.addEventListener('DOMContentLoaded', function() {
  // Получаем элементы
  const infoBtn = document.getElementById('personalAccount-info-btn');
  const formBtn = document.getElementById('personalAccount-form-btn');
  const infoBlock = document.querySelector('.personalAccount-hero__content-bloks__data-bottom__info');
  const formBlock = document.querySelector('.personalAccount-hero__content-bloks__data-bottom__form');
  const parentBlock = document.querySelector('.personalAccount-hero__content-bloks__data-bottom');

  // Функция для обновления высоты родительского блока
  function updateParentHeight() {
      const activeBlock = document.querySelector('.personalAccount-hero__content-bloks__data-bottom .active');
      parentBlock.style.height = activeBlock.offsetHeight + 'px';
  }

  // Обработчики событий для кнопок
  infoBtn.addEventListener('click', function() {
      // Показать блок информации и скрыть блок формы
      infoBlock.classList.remove('active');
      formBlock.classList.add('active');
      updateParentHeight();
  });

  // Устанавливаем начальную высоту родительского блока при загрузке страницы
  updateParentHeight();
});

document.addEventListener('DOMContentLoaded', function () {
  const sortingButton = document.getElementById('personalAccount__orders-sorting');
  const sortingChoiceBlock = document.querySelector('.personalAccount-hero__content-bloks__orders-nav__sorting-choice');
  const sortingChoiceButtons = sortingChoiceBlock.querySelectorAll('.personalAccount-hero__content-bloks__orders-nav__sorting-choice button');

  // Функция для переключения класса active
  function toggleActiveClass() {
    sortingChoiceBlock.classList.toggle('active');
  }

  // Обработчик клика на кнопку сортировки
  sortingButton.addEventListener('click', function () {
    toggleActiveClass();
  });

  // Обработчик клика на любую кнопку внутри блока сортировки
  sortingChoiceButtons.forEach(button => {
    button.addEventListener('click', function () {
      sortingChoiceBlock.classList.remove('active');
    });
  });
});

/* Личный кабинет - мои заказы */

document.addEventListener('DOMContentLoaded', () => {
  // Функция для инициализации обработки всех элементов
  function setupItems() {
    // Находим все элементы с классом personalAccount-hero__content-bloks__orders-list__item
    const items = document.querySelectorAll('.personalAccount-hero__content-bloks__orders-list__item');

    // Проходим по каждому элементу и устанавливаем обработчики
    items.forEach(item => {
      // Проверяем, был ли уже обработан этот элемент, чтобы избежать дублирования событий
      if (!item.dataset.initialized) {
        // Отмечаем элемент как инициализированный
        item.dataset.initialized = 'true';

        // Находим свернутую и развернутую части блока
        const collapsedBlock = item.querySelector('.personalAccount-hero__content-bloks__orders-list__item-collapsed');
        const expandedBlock = item.querySelector('.personalAccount-hero__content-bloks__orders-list__item-expanded');
        const rollButton = item.querySelector('.personalAccount__orders-block-roll');

        // Установка высоты при загрузке страницы для активного элемента
        if (expandedBlock.classList.contains('active')) {
          item.style.height = expandedBlock.scrollHeight + 'px';
        } else {
          item.style.height = collapsedBlock.scrollHeight + 'px';
        }

        // Обработка клика на свернутый блок для его открытия
        collapsedBlock.addEventListener('click', () => {
          if (!expandedBlock.classList.contains('active')) {
            // Удаляем активные классы у всех элементов, чтобы только один блок был развернут
            items.forEach(otherItem => {
              const otherCollapsedBlock = otherItem.querySelector('.personalAccount-hero__content-bloks__orders-list__item-collapsed');
              const otherExpandedBlock = otherItem.querySelector('.personalAccount-hero__content-bloks__orders-list__item-expanded');

              otherCollapsedBlock.classList.add('active');
              otherExpandedBlock.classList.remove('active');
              otherItem.classList.remove('change');

              // Возвращаем высоту свернутого блока для всех остальных
              otherItem.style.height = otherCollapsedBlock.scrollHeight + 'px';
            });

            // Активируем текущий блок: убираем класс active у свернутого и добавляем к развернутому
            collapsedBlock.classList.remove('active');
            expandedBlock.classList.add('active');
            item.classList.add('change');

            // Устанавливаем высоту для развернутого блока
            item.style.height = expandedBlock.scrollHeight + 'px';
          }
        });

        // Обработка клика на кнопку "свернуть" внутри развернутого блока
        rollButton.addEventListener('click', (event) => {
          event.stopPropagation();

          // Возвращаем активный класс к свернутому блоку и убираем с развернутого
          collapsedBlock.classList.add('active');
          expandedBlock.classList.remove('active');
          item.classList.remove('change');

          // Устанавливаем высоту свернутого блока
          item.style.height = collapsedBlock.scrollHeight + 'px';
        });
      }
    });
  }

  // Инициализация всех элементов при загрузке страницы
  setupItems();

  // Пример динамического добавления элементов, чтобы они тоже работали
  // Эту функцию можно вызывать каждый раз, когда добавляются новые элементы
  function addNewItem(newItemHtml) {
    // Добавляем новый элемент в список заказов (например, в конец списка)
    const ordersList = document.querySelector('.personalAccount-hero__content-bloks__orders-list');
    ordersList.insertAdjacentHTML('beforeend', newItemHtml);

    // Переинициализируем все элементы, включая новые
    setupItems();
  }

  // Пример вызова функции для добавления нового элемента:
  // addNewItem('<li class="personalAccount-hero__content-bloks__orders-list__item">...</li>');
});

/* Личный кабинет - закладки - появление окна сортировки */

document.addEventListener('DOMContentLoaded', function () {
  const sortingButton = document.getElementById('personalAccount__bookmarks-sorting');
  const sortingChoiceBlock = document.querySelector('.personalAccount-hero__content-bloks__bookmarks-nav__sorting-choice');
  const sortingChoiceButtons = sortingChoiceBlock.querySelectorAll('.personalAccount-hero__content-bloks__bookmarks-nav__sorting-choice button');

  // Функция для переключения класса active
  function toggleActiveClass() {
    sortingChoiceBlock.classList.toggle('active');
  }

  // Обработчик клика на кнопку сортировки
  sortingButton.addEventListener('click', function () {
    toggleActiveClass();
  });

  // Обработчик клика на любую кнопку внутри блока сортировки
  sortingChoiceButtons.forEach(button => {
    button.addEventListener('click', function () {
      sortingChoiceBlock.classList.remove('active');
    });
  });
});



