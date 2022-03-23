Vue.createApp({
  data() {
    return {
      message: "Hello world",
      currentViewId: "home",
      guestName: undefined,
      views: [
        { id: "home", name: "dmosc", display: "block" },
        { id: "hobbies", name: "hobbies", display: "none" }
      ],
      hobbies: [
        {
          name: "Investing",
          description:
            "I enjoy reading about financial markets in my spare time. I've been trading stocks and cryptocurrencies for the past couple of years."
        },
        {
          name: "Reading",
          description:
            "I try to read every single day. I've incorporated this practise in my life for almost 5 years now and it has been a very rewarding investment."
        },
        {
          name: "Exercising",
          description:
            "I exercise often in the gym. After a long programming session, going out to stretch my legs helps me empty my cognitive buffer and recharge myself."
        }
      ]
    };
  },
  methods: {
    move(to) {
      // document.getElementById(this.currentViewId).style.display = "none";
      // document.getElementById(to).style.display = "block";
      this.currentViewId = to;
    }
  }
}).mount("#app");
