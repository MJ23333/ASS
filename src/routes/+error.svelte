<script>
	import { page } from '$app/stores';
</script>

<main>
    <div class="font-black text-9xl">出错啦！</div>
    {$page.status} {$page.error.message}
    <div>
        <a href="/">返回主页</a>
    </div>
</main>