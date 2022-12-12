<script>
  import Item from './Item.svelte';
  import { todoList } from '../services/store';

  const handleClick = index => {
    $todoList[index].done = true;
  };
</script>

<ul>
  {#each $todoList as { label, done }, index}
    <li on:click={() => handleClick(index)} on:keydown={() => handleClick(index)}>
      <Item {label} {done} />
    </li>
  {/each}
</ul>

<style lang="scss">
  @import 'src/styles/variables.scss';
  li {
    display: grid;
    grid-template-columns: 20% 80%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    cursor: pointer;
  }
</style>
