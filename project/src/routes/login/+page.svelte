<script lang="ts">
    import { loginStatus } from '$lib/Tour';
    import { Status } from '$lib/Tour';
    import { statusStrings } from '$lib/Tour';

    function handleUserClick() {
        loginStatus.set(statusStrings[Status.User]);
    }

    function handleGuideClick() {

        loginStatus.set(statusStrings[Status.Guide]);
    }

    function handleAdminClick() {
        loginStatus.set(statusStrings[Status.Admin]); 
    }
</script>


<div class="container mx-auto">
    <!-- main content flex -->
    <div class="flex flex-col p-4 lg:my-16 lg:mx-24 gap-8 border rounded-lg">
        
        <div class="flex flex-col lg:flex-row gap-8 w-full items-center">
            
            <!-- back -->
            <a href="/">
                <div class="rounded-lg shadow-lg border border-gray-400 hover:bg-slate-300">
                    <p class="p-4 text-xl">Tilbake</p>
                </div>
            </a>
            
            <!-- title -->
            <p class="text-3xl lg:text-4xl p-2">Logg inn som:</p>
            
            
        </div>
        <div class="flex flex-col lg:flex-row gap-8 w-full items-center">
            <a href="/" class="w-full" on:click={handleUserClick}>
                <div class="rounded-lg shadow-lg border border-gray-400 hover:bg-slate-300">
                    <p class="p-4 text-xl">Bruker</p>
                </div>
            </a>
            <a href="/" class="w-full" on:click={handleGuideClick}>
                <div class="rounded-lg shadow-lg border border-gray-400 hover:bg-slate-300">
                    <p class="p-4 text-xl">Guide</p>
                </div>
            </a>
            <a href="/" class="w-full" on:click={handleAdminClick}>
                <div class="rounded-lg shadow-lg border border-gray-400 hover:bg-slate-300">
                    <p class="p-4 text-xl">Admin</p>
                </div>
            </a>
            
        </div>
    </div>
</div>
