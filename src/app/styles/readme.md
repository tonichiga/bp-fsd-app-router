ви можете додати новий колір до свого проекту, визначивши змінну теми, наприклад --color-mint-500:

@theme {
--color-_ Кольорові утиліти, такі як bg-red-500, text-sky-300та багато інших
--font-_ Утиліти сімейства шрифтів, якfont-sans
--text-_ Такі утиліти розміру шрифтуtext-xl
--font-weight-_ Такі утиліти, як вага шрифтуfont-bold
--tracking-_ Утиліти міжлітерного інтервалу, якtracking-wide
--leading-_ Такі утиліти, як висота рядкаleading-tight
--breakpoint-_ Чуйні варіанти точки зупину, якsm:_
--container-* Варіанти запитів контейнерів, як @sm:*і утиліти розміру, якmax-w-md
--spacing-_ Утиліти встановлення інтервалів і розмірів, такі як px-4, max-h-16та багато інших
--radius-_ Утиліти радіусу кордону, якrounded-sm
--shadow-_ Box shadow утиліти типуshadow-md
--inset-shadow-_ Утиліти тіні вставного поля, якinset-shadow-xs
--drop-shadow-_ Такі утиліти фільтрування тіні, якdrop-shadow-md
--blur-_ Утиліти фільтрів розмиття, якblur-md
--perspective-_ Перспективні утиліти типуperspective-near
--aspect-_ Такі утиліти, як співвідношення сторінaspect-video
--ease-_ Утиліти функції визначення часу переходу, якease-out
--animate-_ Утиліти для анімації, якanimate-spin

--animate-fade-in-scale: fade-in-scale 0.3s ease-out;
@keyframes fade-in-scale {
0% {
opacity: 0;
transform: scale(0.95);
}
100% {
opacity: 1;
transform: scale(1);
}
}

}

Використання

<div class="bg-mint-500 font-Fira"  style="background-color: var(--color-mint-500)"/>

Визначення звичайних змінних CSS :rootможе бути корисним у проектах Tailwind, коли ви хочете визначити змінну, яка не призначена для підключення до службового класу. Використовуйте @theme, коли ви хочете, щоб маркер дизайну зіставлявся безпосередньо з класом корисності, і використовуйте :root для визначення звичайних змінних CSS, які не повинні мати відповідні класи корисності.
