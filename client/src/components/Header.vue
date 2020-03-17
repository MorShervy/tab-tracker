<template>
  <header>
    <h2>
        TabTracker
    </h2>
    <nav>
      <ul>
        
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
};
</script>

<style scoped>
header {
  background-color:rgba(0,188,212,.9);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  padding: 20px 50px;

  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
}

header a {
  text-decoration: none;
  color: #fff;
  opacity: 0.6;
  cursor: pointer;
}

header a:hover {
  opacity: 1;
}

header nav ul {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

header nav li {
  margin: 0 6px;
}

header nav li:first-child {
  margin-left: 0;
}
header nav li:last-child {
  margin-right: 0;
}

@media (max-width: 1000px) {
  header {
    text-align: center;
    flex-direction: column;
    padding: 20px 50px;
  }

  header img {
    width: 75%;
  }

  header nav {
    justify-content: space-around;
  }

  header h2 {
    margin-bottom: 15px;
  }
}
</style>