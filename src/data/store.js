import {reactive} from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  cardList: [],
  archetypeToSearch: "",
  archetypeList: [],
  raceToSearch: "",
  raceList: [],
  isPresent: true
})
