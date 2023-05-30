<template>
  <div id="home-view" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
    <div class="content">
      <h1>RecipeFinder</h1>
      <div class="search-container">
        <input type="text" v-model="searchText" class="search-bar" placeholder="Sök efter maträtt..." v-on:keyup.enter="search" />
        <button v-on:click="search" class="search-button">Sök</button>
      </div>
      <div v-if="meal">
        <h2>{{ meal.strMeal }}</h2>
        <img :src="meal.strMealThumb" alt="Meal image" />
        <p>{{ meal.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImage from '@/assets/background.jpg';
export default {
  data() {
    return {
      backgroundImage,
      searchText: '',
      meal: null,
    };
  },
  methods: {
    search() {
  this.$router.push(`/search/${this.searchText}`);
},
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
#home-view {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
}

.search-container {
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin: 10px auto;
}

h1 {
  font-size: 3.1rem;
  margin-bottom: 50px;
}
.search-container {
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin: 10px auto;
}
.search-bar {
  flex-grow: 1;
  margin-right: 3px;
  padding: 10px;
  font-size: 1.2em;
  border: none;
  border-radius: 10px;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}

.search-button {
  padding: 10px 10px;
  font-size: 1.2em;
  border: none;
  border-radius: 10px;
  background-color: white;
  color: black;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

}
</style>
