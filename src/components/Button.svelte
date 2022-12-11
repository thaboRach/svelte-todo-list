<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('addTodo');
  }
</script>

<button on:click={handleClick}>
  <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
    ><path d="M7.5 1v13M1 7.5h13" stroke="currentColor" /></svg
  >
</button>

<style lang="scss">
  @import 'src/styles/variables.scss';
  button {
    background-color: $white;
    border: none;
    position: fixed;
    bottom: 80px;
    right: 40px;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: $secondary-color;
      transition: 0.7s;
    }
    &:active {
      background-color: $primary-color;
    }
  }
</style>
