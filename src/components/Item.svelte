<script>
  import { todoList } from '../services/store';
  export let label;
  export let done;
  export let index;

  const handleClick = index => {
    $todoList[index].done = true;
  };
</script>

<li on:click={() => handleClick(index)}>
  <div class:filled={done} />
  <p class:done>{label}</p>
</li>

<style lang="scss">
  @import 'src/styles/variables.scss';
  li {
    display: grid;
    grid-template-columns: 20% 80%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    cursor: pointer;

    > div {
      width: 1rem;
      height: 1rem;

      background-color: transparent;
      border-color: $secondary-color;
      border-radius: 50%;
      border-style: solid;
      border-width: 2px;

      justify-self: end;
      align-self: center;

      margin-right: 1rem;

      &.filled {
        background-color: $secondary-color;
      }
    }
    > p {
      font-size: 2rem;
      justify-self: start;
      padding: 1rem;
      border-bottom: 2px solid $secondary-color;
      min-width: 8rem;
      @media screen and (max-width: $mobile) {
        font-size: 1.5rem;
      }

      &.done {
        text-decoration: line-through;
      }
    }
  }
</style>
