import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    news: [
      {
        image:
          "https://backend.learn.maxima.school/files/ebb3a325-0974-4c80-a3a8-6233af42488a.png",
        alt: "Новость 1",
        header: "Что спросить джуну — рекомендация от senior-разработчика",
        desc: "Как джуны проходят через свою первую работу? Как встраиваются в рабочие процессы, если за спиной пока только первое успешное собеседование?",
      },
      {
        image:
          "https://backend.learn.maxima.school/files/0da608e0-229a-4c41-83d1-cd174b6a8d75.webp",
        alt: "Новость 2",
        header: "Как выбрать язык программирования?",
        desc: "Даже после того, как вы определились, с какой областью программирования вы хотите работать, выбор языка может оказаться неожиданно трудным.",
      },
      {
        image:
          "https://backend.learn.maxima.school/files/4a1c6fc7-f2ad-44c2-bfd2-3ad0b36eb661.png",
        alt: "Новость 3",
        header:
          "Подборка IT-компаний, куда можно пойти, чтобы работать с космосом",
        desc: "Работать в космической отрасли со специализацией в IT — можно. Более того, многие компании в космической отрасли постоянно ищут IT-специалистов.",
      },
      {
        image:
          "https://backend.learn.maxima.school/files/a382fcaa-1599-447d-818c-170bbb2b2607.png",
        alt: "Новость 4",
        header:
          "Что точно стоит убрать из своего резюме и профиля на хедхантере?",
        desc: "Ваше резюме и профиль на сайтах для поиска работы — это первое, что увидит работодатель, поэтому важно внимательно подойти к его составлению.",
      },
      {
        image:
          "https://backend.learn.maxima.school/files/2245849a-2a00-4e0f-b374-b6532acaed76.png",
        alt: "Новость 5",
        header: "Как оформить профиль на LinkedIn?",
        desc: "LinkedIn — одна из самых популярных профессиональных социальных сетей в мире. В IT-сфере LinkedIn служит инструментом для поиска контактов.",
      },
      {
        image:
          "https://backend.learn.maxima.school/files/7b0c83e9-f3e3-412e-a10e-c3a2cbbfc0ff.png",
        alt: "Новость 6",
        header: "Что такое пробные собеседования и где их проходить?",
        desc: "Собеседования, особенно впервые в новой специальности, это волнительно.",
      },
    ],
  },
});

export default slice.reducer;
