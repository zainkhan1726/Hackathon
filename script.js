const skillSection = document.getElementById('skills');
const toggleButton = document.getElementById('toggle-skills')

toggleButton.addEventListener('click',()=>{
    skillSection.classList.toggle('hidden')
});

skillSection.classList.add('hidden');