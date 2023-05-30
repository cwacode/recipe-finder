<template>
    <div id="search-results" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
      <h1>Sökresultat:</h1>
      <div class="results-container" v-if="meals">
        <div class="meal" v-for="(meal, index) in meals" :key="index">
          <h2>{{ meal.strMeal }}</h2>
          <img :src="meal.strMealThumb" alt="Meal image" />
          <div class="instuctions">
            <p>{{ meal.strInstructions }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Inga resultat hittades</p>
      </div>
    </div>
</template>

<script>
export default {
  props: ['term'],
  data() {
    return {
      backgroundImage: '../assets/background.jpg',
      meals: null,
    };
  },
  async created() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.term}`);
    const data = await response.json();
    this.meals = data.meals;
  },
};
</script>


  
<style lang="scss" scoped>
html,body {
  height: 100%;
  margin: 0;
  padding: 0;
}
img {
  max-width: 300px;
}
#search-results {
  min-height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.instuctions {
  max-width: 800px;
}

h1 {
  top: 2px;
  width: 100%;
  text-align: center;
}

.results-container {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.meal {
  text-align: center;
}
</style>
  