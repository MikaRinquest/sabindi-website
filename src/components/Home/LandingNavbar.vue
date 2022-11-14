<template>
    <nav id="nav" class="d-flex">
        <div class="img-hold col-3">
            <img src="../../assets/image857.png" alt="Company Logo" class="logo">
        </div>
        <div class="col-9">
            <ul class="list-holder">
                <a href="#landing" class="nav-link">
                    <li class="list-item">Home</li>
                </a>
                |
                <a href="#h-services" class="nav-link">
                    <li class="list-item">Services</li>
                </a>
                |
                <a href="#about" class="nav-link">
                    <li class="list-item">About</li>
                </a>
                |
                <a href="#clients" class="nav-link">
                    <li class="list-item">Industries serviced</li>
                </a>
                |
                <a href="#certification" class="nav-link">
                    <li class="list-item">Certifications</li>
                </a>
                |
                <a href="#testimonials" class="nav-link">
                    <li class="list-item">Testimonials</li>
                </a>
                |
                <a href="#h-contact" class="nav-link">
                    <li class="list-item">Contact</li>
                </a>

            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.list-holder {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 5px;
}

.list-item {
    list-style-type: none;
    padding: 5px;
}
</style>