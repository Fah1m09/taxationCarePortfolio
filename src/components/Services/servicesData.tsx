import { Service } from "@/types/service";

const servicesData: Service[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path
          opacity="0.5"
          d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
        />
        <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
      </svg>
    ),
    title: "VAT",
    paragraph: `<ul class="list-disc"><li>VAT Return</li><li>Price Declaration</li> <li>VAT Registration and Enlistment</li><li>Assist to implementing of VAT software</li><li>Compliance of VAT books, Accounts and VAT Audit</li><li>ADR</li><li>Deal VAT related litigation matters</li></ul> `,
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M39 12C39.5523 12 40 12.4477 40 13V39C40 39.5523 39.5523 40 39 40H13C12.4477 40 12 39.5523 12 39V33C12 32.4477 12.4477 32 13 32H31C31.5523 32 32 31.5523 32 31V13C32 12.4477 32.4477 12 33 12H39Z"
        />
        <rect width="28" height="28" rx="1" />
      </svg>
    ),
    title: "Tax Registration & Return",
    paragraph: `<ul class="list-disc"> <li>eTIN and eReturn  </li> <li>Withholding Tax Return</li> <li> Salary Return</li> <li>Employee Tax Filing Return </li> <li>Appeal and Tribunal hearing purpose </li> <li>Assist to preparing Accounts, Audit and implementing of Accounts software </li> <li>ADR</li></ul>`,
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="45"
        height="45"
        x="0"
        y="0"
        viewBox="0 0 16 16"
        className="fill-current"
      >
        <g>
          <path
            d="M2.5 15h11a1.498 1.498 0 0 0 1.5-1.5v-11A1.498 1.498 0 0 0 13.5 1h-11A1.498 1.498 0 0 0 1 2.5v11A1.498 1.498 0 0 0 2.5 15zM5 3.5a.5.5 0 0 1 1 0v2a2 2 0 0 0 4 0v-2a.5.5 0 0 1 1 0v2a3 3 0 0 1-6 0z"
            opacity="1"
            data-original="#2196f3"
          ></path>
        </g>
      </svg>
    ),
    title: "Customs",
    paragraph:
      "Taxation Care provides advice and guidance to their clients on customs regulations and procedures, best practices to ensure smooth customs clearances, and help businesses or individuals keep in compliance with the complex importing and exporting legal requirements and ordinances.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path
          opacity="0.5"
          d="M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"
        />
        <path d="M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z" />
      </svg>
    ),
    title: "Business Advisory",
    paragraph:
      "Taxation Care helps improve business services through policies and standard operating procedures, process development and regulatory meetings.",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="45"
        height="45"
        x="0"
        y="0"
        viewBox="0 0 296.999 296.999"
        className="fill-current"
      >
        <g>
          <path
            d="M45.432 35.049h-.025a10.474 10.474 0 0 0-7.446 3.085 10.583 10.583 0 0 0-3.128 7.543v159.365c0 5.844 4.773 10.61 10.641 10.625 24.738.059 66.184 5.215 94.776 35.136V84.023c0-1.981-.506-3.842-1.461-5.382-23.467-37.792-68.563-43.534-93.357-43.592zM262.167 205.042V45.676c0-2.852-1.111-5.531-3.128-7.543a10.477 10.477 0 0 0-7.445-3.085h-.026c-24.793.059-69.889 5.801-93.357 43.593-.955 1.54-1.46 3.401-1.46 5.382v166.779c28.592-29.921 70.038-35.077 94.776-35.136 5.867-.015 10.64-4.781 10.64-10.624z"
            opacity="1"
            data-original="#000000"
          ></path>
          <path
            d="M286.373 71.801h-7.706v133.241c0 14.921-12.157 27.088-27.101 27.125-20.983.05-55.581 4.153-80.084 27.344 42.378-10.376 87.052-3.631 112.512 2.171a10.606 10.606 0 0 0 9.011-2.054 10.567 10.567 0 0 0 3.994-8.301v-168.9c.001-5.859-4.767-10.626-10.626-10.626zM18.332 205.042V71.801h-7.706C4.768 71.801 0 76.568 0 82.427v168.897c0 3.25 1.456 6.276 3.994 8.301a10.598 10.598 0 0 0 9.011 2.054c25.46-5.803 70.135-12.547 112.511-2.171-24.502-23.19-59.1-27.292-80.083-27.342-14.943-.036-27.101-12.203-27.101-27.124z"
            opacity="0.5"
            data-original="#000000"
          ></path>
        </g>
      </svg>
    ),
    title: "IRC & ERC",
    paragraph:
      "Taxation Care efficiently helps in getting IRC certificate and renewing ERC and IRC every year.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
        />
        <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" />
      </svg>
    ),
    title: "Trade Mark & Trade License",
    paragraph:
      "Taxation Care helps complete the entire process of trademark registration services. Also efficiently helps in getting Trade License and renewing license",
  },
];
export default servicesData;
