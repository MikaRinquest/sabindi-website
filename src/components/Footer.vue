<template>
    <div id="footer" class="d-flex">
        <div class="copyright col-6">
            <p>Copyright<i class="bi bi-c-circle px-1"> </i>2022 Sabindi Group Global</p>
            <p>All Rights Reserved</p>
        </div>
        <div class="socials col-6">
            <p class="f-social">Follow Sabindi on Social Media</p>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-tiktok"></i>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.copyright {
    font-size: 20px;
    justify-self: flex-start;
    padding-left: 10px;
}

.socials {
    text-align: end;
    padding-right: 30px;
}

.f-social {
    font-size: 20px;
    font-weight: 500;
}

.bi {
    font-size: 20px;
    padding-right: 10px;
}

.bi-instagram:hover {
    color: #bc2a8d;
}

.bi-facebook:hover {
    color: #4267B2;
}

.bi-linkedin:hover {
    color: #0e76a8;
}

.bi-twitter:hover {
    color: #1DA1F2;
}

.bi-tiktok:hover {
    color: #000000;
}

@media only screen and (max-width:510px) {
    .copyright {
        font-size: 15px;
        padding-left: 0;
    }

    .socials {
        padding-right: 0;
    }

    .f-social {
        font-size: 15px;
        font-weight: 500;
    }

    .bi {
        font-size: 14px;
        padding-right: 10px;
    }
}
</style>