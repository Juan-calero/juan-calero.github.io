const desenvolvimentoData = [
  {
    name: "Html",
    width: "1em",
    height: "1em",
    viewBox: "0 0 1024 1024",
    d: "M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2l-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3l-21.2 242.2l-1.7 16.2l-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2l102.4 27.7h.4l102-27.6l11.4-118.6H510.9v-.1H306l-22.8-253.5l-1.7-24.3h460.3l-1.6 24.3z",
    skill: 0,
  },
  {
    name: "Css",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    d: "M64 32l35 403.22L255.77 480L413 435.15L448 32zm290.68 334.9L256.07 395l-98.46-28.24l-6.75-77.76h48.26l3.43 39.56l53.59 15.16l.13.28l53.47-14.85l5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z",
    skill: 0,
  },
  {
    name: "JS",
    width: "0.88em",
    height: "1em",
    viewBox: "0 0 448 512",
    d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5c-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6z",
    skill: 0,
  },
  {
    name: "gatsby",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    d: "M16 .011C7.099.011.011 7.099.011 16S7.099 31.995 16 31.995S31.989 24.902 31.989 16S24.901.011 16 .011zM3.484 16.14l12.38 12.376c-6.817 0-12.38-5.563-12.38-12.376zm15.297 12.1L3.765 13.219C5.016 7.656 10.021 3.484 16 3.484a12.635 12.635 0 0 1 10.151 5.147l-1.807 1.531a10.21 10.21 0 0 0-8.48-4.453a10.081 10.081 0 0 0-9.599 6.819L19.338 25.6c3.197-1.115 5.703-3.896 6.396-7.235h-5.423v-2.364h8.204c0 5.979-4.172 10.989-9.735 12.24z",
    skill: 0,
  },
  {
    name: "SASS",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    d: "M15.092 22.146c-.015.03-.03.054 0 0zm12.456-4.35c-1.006 0-1.998.23-2.9.675c-.295-.595-.6-1.115-.65-1.505c-.06-.455-.125-.725-.055-1.265s.385-1.305.38-1.36c-.005-.055-.07-.33-.715-.335s-1.2.125-1.265.295a6.09 6.09 0 0 0-.265.955c-.115.585-1.289 2.675-1.954 3.765c-.22-.425-.405-.8-.445-1.1c-.06-.455-.125-.725-.055-1.265s.385-1.305.38-1.36c-.005-.055-.07-.33-.714-.335s-1.2.125-1.265.295c-.065.17-.135.57-.265.955s-1.695 3.865-2.104 4.77c-.21.46-.39.83-.52 1.08c-.02.04-.035.065-.045.085c.015-.025.025-.05.025-.04c-.11.215-.175.335-.175.335v.005c-.085.16-.18.305-.225.305c-.03 0-.095-.42.015-.995c.235-1.21.79-3.09.785-3.155c-.005-.035.105-.36-.365-.535c-.455-.165-.62.11-.66.11s-.07.1-.07.1s.505-2.12-.97-2.12c-.92 0-2.2 1.01-2.829 1.925c-.395.215-1.25.68-2.15 1.175l-1.035.57c-.025-.025-.045-.05-.07-.075c-1.79-1.91-5.094-3.26-4.954-5.825c.05-.935.375-3.39 6.354-6.37c4.9-2.44 8.817-1.77 9.492-.28c.97 2.125-2.095 6.08-7.183 6.65c-1.94.215-2.959-.535-3.214-.815c-.265-.295-.305-.31-.405-.255c-.165.09-.06.35 0 .505c.15.395.775 1.095 1.84 1.445c.935.305 3.209.475 5.958-.59c3.089-1.19 5.494-4.505 4.788-7.28c-.718-2.82-5.394-3.745-9.815-2.175c-2.635.935-5.484 2.405-7.533 4.32C.26 11.361-.129 13.346.031 14.176c.57 2.945 4.629 4.865 6.253 6.285l-.225.125c-.815.405-3.909 2.025-4.684 3.735c-.875 1.94.145 3.33.814 3.52c2.09.58 4.229-.465 5.379-2.18s1.01-3.955.48-4.975c-.005-.015-.015-.025-.02-.04a72.558 72.558 0 0 1 1.815-1.04c-.2.54-.345 1.19-.42 2.13c-.09 1.1.365 2.525.955 3.085c.26.245.574.25.77.25c.69 0 1-.57 1.345-1.25c.425-.83.8-1.795.8-1.795s-.47 2.61.815 2.61c.47 0 .94-.605 1.15-.915v.005s.01-.02.035-.06c.05-.075.075-.12.075-.12v-.015c.19-.325.605-1.07 1.23-2.3c.81-1.59 1.584-3.575 1.584-3.575c.075.436.179.867.31 1.29c.14.475.435.995.67 1.5c-.19.26-.305.41-.305.41c0 .004.002.007.005.01c-.15.2-.32.415-.495.625c-.639.76-1.4 1.63-1.5 1.88c-.12.295-.09.515.14.685c.17.13.47.15.785.125c.575-.04.98-.18 1.175-.27a4.11 4.11 0 0 0 1.01-.53c.625-.46 1.005-1.12.97-1.99c-.02-.48-.175-.96-.365-1.41c.055-.08.115-.165.17-.25a26.716 26.716 0 0 0 1.755-3.031c.075.436.178.867.31 1.29c.12.405.355.85.57 1.285c-.93.755-1.505 1.63-1.704 2.205c-.37 1.065-.08 1.545.465 1.655c.245.05.595-.065.855-.175c.386-.129.75-.316 1.079-.555c.625-.46 1.23-1.105 1.189-1.98c-.015-.395-.125-.79-.27-1.17c.785-.33 1.805-.51 3.105-.36c2.784.325 3.329 2.065 3.224 2.79s-.69 1.13-.885 1.25c-.195.12-.255.165-.24.255c.025.13.115.125.28.095c.23-.04 1.46-.59 1.515-1.935c.08-1.7-1.555-3.57-4.45-3.555zM6.089 25.031c-.92 1.005-2.209 1.385-2.764 1.065c-.595-.346-.36-1.825.774-2.896c.69-.65 1.58-1.25 2.17-1.62c.135-.08.33-.2.57-.345a.828.828 0 0 1 .06-.035c.045-.03.095-.055.145-.085c.414 1.52.015 2.86-.955 3.915zm6.718-4.57c-.32.785-.994 2.785-1.405 2.68c-.35-.09-.565-1.615-.07-3.115c.25-.755.78-1.655 1.095-2.005c.505-.565 1.06-.745 1.19-.52c.175.295-.61 2.47-.81 2.96zm5.55 2.65c-.135.07-.26.115-.32.08c-.045-.025.055-.12.055-.12s.695-.745.97-1.085c.16-.2.345-.435.545-.695c0 .025.005.05.005.08c-.006.895-.866 1.5-1.256 1.74zm4.28-.975c-.1-.07-.085-.305.25-1.035c.13-.285.43-.765.95-1.225c.059.174.091.356.095.54c-.005 1.125-.81 1.545-1.295 1.72z",
    skill: 0,
  },
  {
    name: "REACT",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    d: "M11.404 3.36c-.845-.057-1.676.095-2.404.515c-.971.56-1.618 1.517-1.965 2.62c-.347 1.1-.427 2.37-.3 3.757c.012.14.037.287.054.43c-.132.056-.272.108-.4.168c-1.264.583-2.323 1.287-3.104 2.138C2.505 13.84 2 14.878 2 16c0 1.121.505 2.16 1.285 3.012c.78.851 1.84 1.555 3.104 2.138c.128.06.268.112.4.168c-.017.143-.042.29-.055.43c-.126 1.387-.046 2.656.301 3.758c.347 1.102.994 2.058 1.965 2.619c.971.56 2.122.643 3.25.393c1.128-.25 2.267-.817 3.404-1.62c.115-.08.23-.175.346-.261c.115.086.23.18.346.261c1.137.803 2.276 1.37 3.404 1.62c1.128.25 2.279.168 3.25-.393c.971-.56 1.618-1.517 1.965-2.62c.347-1.1.427-2.37.3-3.757c-.012-.14-.037-.287-.054-.43c.132-.056.272-.108.4-.168c1.264-.583 2.323-1.287 3.104-2.138C29.495 18.16 30 17.122 30 16c0-1.121-.505-2.16-1.285-3.012c-.78-.851-1.84-1.555-3.104-2.138c-.128-.06-.268-.112-.4-.168c.017-.143.042-.29.055-.43c.126-1.387.046-2.656-.301-3.758c-.347-1.102-.994-2.058-1.965-2.619c-.971-.56-2.122-.643-3.25-.393c-1.128.25-2.267.817-3.404 1.62c-.115.08-.23.175-.346.261c-.115-.086-.23-.18-.346-.261c-1.137-.803-2.276-1.37-3.404-1.62a5.624 5.624 0 0 0-.846-.123zm-.13 1.992c.17.012.351.04.544.084c.756.167 1.661.591 2.616 1.255a23.064 23.064 0 0 0-2.325 2.573a23.073 23.073 0 0 0-3.386.724c-.098-1.158-.014-2.154.218-2.892c.239-.756.595-1.22 1.059-1.489c.348-.2.762-.294 1.273-.255zm9.453 0c.51-.039.925.055 1.273.255c.464.268.82.733 1.059 1.489c.232.738.316 1.734.218 2.892a23.073 23.073 0 0 0-3.386-.724a23.064 23.064 0 0 0-2.325-2.573c.955-.664 1.86-1.088 2.616-1.255c.193-.043.374-.072.545-.084zM16 7.959c.351.325.702.686 1.053 1.064A29.618 29.618 0 0 0 16 9c-.355 0-.704.011-1.053.023c.35-.378.702-.739 1.053-1.064zM16 11c.965 0 1.9.057 2.799.152A26.459 26.459 0 0 1 20.33 13.5c.482.835.9 1.673 1.268 2.5a26.457 26.457 0 0 1-1.268 2.5a26.459 26.459 0 0 1-1.531 2.348c-.9.095-1.834.152-2.799.152c-.965 0-1.9-.057-2.799-.152A26.459 26.459 0 0 1 11.67 18.5c-.482-.835-.9-1.673-1.268-2.5c.367-.827.786-1.665 1.268-2.5s.999-1.617 1.531-2.348A26.46 26.46 0 0 1 16 11zm-5.516.6c-.185.295-.369.592-.546.9a29.63 29.63 0 0 0-.506.924a19.611 19.611 0 0 1-.395-1.444c.457-.141.945-.266 1.447-.38zm11.032 0c.502.114.99.239 1.447.38c-.106.467-.243.952-.395 1.444a29.629 29.629 0 0 0-.506-.924a29.648 29.648 0 0 0-.546-.9zM7.154 12.703c.256 1.065.609 2.17 1.067 3.297a23.057 23.057 0 0 0-1.067 3.297c-1.051-.495-1.872-1.067-2.394-1.637C4.225 17.076 4 16.536 4 16c0-.536.225-1.076.76-1.66c.522-.57 1.343-1.142 2.394-1.637zm17.692 0c1.051.495 1.872 1.067 2.394 1.637c.535.584.76 1.124.76 1.66c0 .536-.225 1.076-.76 1.66c-.522.57-1.343 1.142-2.394 1.637A23.057 23.057 0 0 0 23.779 16c.458-1.127.811-2.232 1.067-3.297zM16 13c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm0 2c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1zm-6.568 3.576c.163.308.328.616.505.924c.178.308.362.605.547.9c-.502-.114-.99-.239-1.447-.38c.106-.467.243-.952.395-1.444zm13.136 0c.152.492.29.977.395 1.444c-.457.141-.945.266-1.447.38c.185-.295.369-.592.547-.9c.177-.308.342-.616.505-.924zM8.723 22.012c1.05.31 2.183.558 3.386.724c.747.96 1.53 1.818 2.325 2.573c-.955.664-1.86 1.088-2.616 1.255c-.773.172-1.354.096-1.818-.171c-.464-.268-.82-.733-1.059-1.489c-.232-.738-.316-1.734-.218-2.892zm14.554 0c.098 1.158.014 2.154-.218 2.892c-.239.756-.595 1.22-1.059 1.489c-.464.267-1.045.343-1.818.171c-.756-.167-1.661-.591-2.616-1.255a23.064 23.064 0 0 0 2.325-2.573a23.073 23.073 0 0 0 3.386-.724zm-8.33.965c.349.012.698.023 1.053.023s.704-.011 1.053-.023c-.35.378-.702.739-1.053 1.064a19.585 19.585 0 0 1-1.053-1.064z",
    skill: 0,
  },
  {
    name: "git",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    d: "M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82z",
    skill: 1,
  },
  {
    name: "github",
    width: "1.23em",
    height: "1em",
    viewBox: "0 0 1227.825 1000",
    d: "M1078.94-.985c-33.192-.491-110.295 10.777-239.027 96.936c-70.161-17.535-144.812-26.188-219.591-26.188c-82.278 0-165.425 10.448-242.965 31.719C192.534-24.605 110.955 1.234 110.955 1.234c-53.258 133.183-20.347 231.788-10.344 256.277C38.014 325.069-.2 411.338-.2 517.07c0 79.822 9.085 151.416 31.281 213.653c1.231 4.803.832 3.732 2.906 7.844c4.89 12.884 10.327 25.39 16.438 37.468c2.094 4.346 4 7.563 4 7.563c62.395 116.307 185.396 191.438 404.244 215.028l330.995.375c233.392-23.144 345.386-98.499 396.994-215.591l3.281-7.625c4.89-11.828 9.153-24.135 20.813-65.562c11.659-41.427 16.875-113.172 16.875-193.185c0-114.755-43.1-206.577-113.092-276.434c12.231-39.48 28.57-127.158-16.313-239.402c0 0-6.293-1.995-19.281-2.188zM818.1 420.133c53.893-.117 100.057 9.136 134.717 45.499v.031c43.369 45.541 68.749 100.525 68.749 159.778c0 276.658-177.932 284.183-397.4 284.183c-219.506 0-397.4-38.336-397.4-284.183c0-58.861 25.009-113.516 67.843-158.872c71.451-75.59 192.365-35.562 329.558-35.562c70.423-.011 136.564-10.75 193.935-10.875zm-408.807 81.468c-45.666 0-82.687 61.741-82.687 137.936c0 76.206 37.019 137.967 82.687 137.967c45.666 0 82.687-61.761 82.687-137.967c0-76.184-37.019-137.881-82.687-137.936zm443.649 0c-45.666 0-82.687 61.741-82.687 137.936c0 76.206 37.019 137.967 82.687 137.967c45.666 0 82.687-61.761 82.687-137.967c0-76.184-37.019-137.881-82.687-137.936z",
    skill: 1,
  },
  {
    name: "npm",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    d: "M0 9.781v10.667h8.885v1.771H16v-1.771h16V9.781zm8.885 8.88H7.114v-5.333H5.333v5.333H1.781v-7.104h7.104zm5.334 0v1.787h-3.552v-8.891h7.115v7.109h-3.563zm16.005 0h-1.776v-5.333h-1.781v5.333h-1.781v-5.333h-1.771v5.333h-3.563v-7.104h10.672zm-16.005-5.328H16v3.557h-1.781z",
    skill: 1,
  },
  {
    name: "wix",
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 512",
    d: "M507.522 65.853c5.526-9.86 7.72-17.573-4.068-16.272h-74.24c-20.53-1.15-49.286 26.22-77.29 58.985c-11.51-31.249-26.467-57.09-57.968-56.951H208.84s-26.848-.405-48.217 56.03c-7.647-16.704-52.62-52.708-67.475-58.056C78.292 44.24 16.975 45.62 6.15 48.564c-10.825 2.942-4.068 12.204-4.068 12.204C21.135 82.464 79.965 225.676 152.462 260.14l-99.53 185.045c-7.272 9.95-5.462 16.918 5.593 20.848l88.986-1.525c20.259-2.739 34.608-12.946 44.747-28.476l64.466-97.164l73.844 106.826c10.762 11.672 30.48 16.656 39.153 16.78h80.85c11.961-.67 14.82-2.606 12.204-13.22L360.845 260.18C440.91 218.4 478.504 102.013 507.522 65.853zM294.758 98.315l28.763-.277c-7.049 9.271-16.897 13.633-29.593 12.999l.83-12.722zm13.305 21.085c11.607 2.177 14.879 7.432 12.22 30.842c-2.658 23.41-29.56 15.072-30.82 1.856c-1.258-13.215 6.992-34.876 18.6-32.698zm-30.819 45.197c-.92 9.755-1.746 20.173-21.531 21.92c-22.242 1.962-23.472-20.174-23.472-20.174c20.368 14.16 32.214 11.364 45.003-1.746zm-61.57-66.282l.83 12.722c-12.697.634-22.544-3.728-29.593-12.999l28.763.277zm5.294 53.783c-1.259 13.216-28.161 21.554-30.82-1.856c-2.658-23.41.613-28.665 12.22-30.842c11.608-2.178 19.859 19.483 18.6 32.698zm112.907 103.759s94.59 164.705 99.408 179.16c-30.51 11.525-78.774 9.214-97.08-9.092c-18.305-18.305-75.807-124.133-75.807-124.133l-84.114 124.133c-9.62 14.734-18.818 15.283-35.92 17.689l-66.416-.03l59.048-106.99c65.765-93.562 123.377-116.585 191.591-140.341c48.039-16.73 85.923-30.016 130.535-71.979c-19.322 38.137-73.772 106.81-121.245 131.583z",
    skill: 1,
  },
  {
    name: "Adobe XD",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    d: "M26.333.401H5.666A5.66 5.66 0 0 0-.001 6.068v19.864a5.66 5.66 0 0 0 5.667 5.667h20.667A5.66 5.66 0 0 0 32 25.932V6.068A5.66 5.66 0 0 0 26.333.401zm4.318 25.011a4.825 4.825 0 0 1-4.823 4.853H6.172a4.846 4.846 0 0 1-4.839-4.839V6.573a4.846 4.846 0 0 1 4.839-4.839h19.64a4.84 4.84 0 0 1 4.839 4.839zM12.651 15l3.735 7.172c.068.109.027.213-.079.213h-2.323c-.145 0-.213-.036-.276-.172c-.853-1.76-1.724-3.52-2.615-5.411h-.025a210.669 210.669 0 0 1-2.537 5.427c-.061.104-.129.145-.239.145H6.093c-.135 0-.145-.109-.077-.187l3.651-6.959l-3.531-7.041c-.084-.109 0-.188.077-.188h2.292c.135 0 .188.027.24.145a272.653 272.653 0 0 1 2.495 5.349h.025c.776-1.76 1.631-3.588 2.453-5.333c.068-.109.109-.177.24-.177h2.145c.109 0 .151.084.084.188zm4.39 2.172c0-3.104 2.063-5.532 5.344-5.532c.281 0 .427 0 .693.027V8.136c0-.084.067-.136.135-.136h2.104c.109 0 .136.041.136.104v12.245c0 .359 0 .812.068 1.301c0 .084-.027.109-.109.152a7.967 7.967 0 0 1-3.412.771c-2.896.015-4.959-1.771-4.959-5.401zm6.038-3.412a2.054 2.054 0 0 0-.772-.135c-1.681 0-2.853 1.296-2.853 3.443c0 2.453 1.197 3.437 2.708 3.437c.317 0 .667-.036.917-.145z",
    skill: 2,
  },
  {
    name: "Photoshop",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    d: "M0 .401v31.198h32V.401zm1.333 1.333h29.333v28.531H1.333zm6.401 5.974c0-.089.188-.156.297-.156a76.42 76.42 0 0 1 3.438-.068c3.698 0 5.135 2.026 5.135 4.62c0 3.391-2.458 4.844-5.469 4.844c-.51 0-.682-.026-1.036-.026v5.125c0 .109-.042.156-.151.156H7.885c-.109 0-.151-.042-.151-.151zm2.365 7.084c.307.021.552.021 1.083.021c1.557 0 3.026-.552 3.026-2.661c0-1.693-1.052-2.552-2.833-2.552c-.526 0-1.031.021-1.276.042zm11.479-1.589c-1.057 0-1.411.531-1.411.969c0 .484.24.813 1.651 1.542c2.089 1.016 2.75 1.979 2.75 3.411c0 2.13-1.63 3.276-3.828 3.276c-1.167 0-2.161-.245-2.734-.573c-.083-.042-.104-.109-.104-.219v-1.958c0-.13.063-.177.151-.109a4.9 4.9 0 0 0 2.682.792c1.057 0 1.495-.438 1.495-1.036c0-.484-.307-.901-1.646-1.604c-1.896-.906-2.688-1.828-2.688-3.37c0-1.719 1.344-3.146 3.672-3.146c1.146 0 1.953.177 2.396.37c.109.068.13.177.13.266v1.828c0 .109-.068.177-.198.13c-.594-.349-1.469-.573-2.323-.573z",
    skill: 2,
  },
]
export default desenvolvimentoData
