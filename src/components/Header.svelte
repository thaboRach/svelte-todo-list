<script>
  import { todoList } from '../services/store';
</script>

<header>
  <h1>To Do</h1>
  <p>{$todoList.length} tasks</p>
</header>

<style lang="scss">
  @import 'src/styles/variables.scss';
  header {
    background-color: $primary-color;
    color: $white;
    display: grid;
    grid-template-columns: 20% 80%;
    width: 100%;
    min-width: fit-content;

    padding-top: 2rem;
    padding-bottom: 2rem;
    > h1 {
      grid-column-start: 2;
      justify-self: start;
      font-size: 4rem;

      @media screen and (max-width: $mobile) {
        font-size: 2rem;
      }
    }

    > p {
      grid-column-start: 2;
      justify-self: start;
      font-size: 1rem;
      color: $secondary-color;
    }

    @media screen and (min-width: $mobile) {
      width: 500px;
    }
  }
</style>
