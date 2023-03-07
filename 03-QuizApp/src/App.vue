<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input type="text" name="" id="" placeholder="Search..." />
    </header>

    <div class="options-container">
      <div class="card">
        <img
          src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202208/MIT-MathProblemSolver-01-press_0.jpg?itok=aLGeaOnY"
          alt=""
          srcset=""
        />
        <div class="card-text">
          <h2>Math</h2>
          <p>15 questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
}

header {
  margin-bottom: 10px;
  margin-top: 10px;

  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

/* CARD */

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text {
  padding: 0 5px;
}
.card .card-text h2 {
  font-weight: bold;
}
</style>
