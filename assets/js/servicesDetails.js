const services = {
    "services": [
      {
        "title": "Personalized Fitness Plans",
        "description": "Get a workout plan tailored to your specific needs and goals, ensuring you get the most out of every session.",
        "image": "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "title": "Online Fitness Classes",
        "description": "Join our live and on-demand fitness classes from anywhere, anytime. Stay fit without leaving home.",
        "image": "https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "title": "Nutrition Coaching",
        "description": "Our nutrition experts will guide you with personalized meal plans and healthy eating habits to complement your fitness journey.",
        "image": "https://images.pexels.com/photos/260998/pexels-photo-260998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "title": "Group Workout Sessions",
        "description": "Enjoy the energy and motivation of working out in a group setting with our fun and engaging fitness sessions.",
        "image": "https://images.pexels.com/photos/7187860/pexels-photo-7187860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "title": "Weight Loss Programs",
        "description": "Achieve your weight loss goals with a customized program that includes fitness, nutrition, and lifestyle coaching.",
        "image": "https://images.pexels.com/photos/7187860/pexels-photo-7187860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "title": "Mindfulness and Recovery",
        "description": "Incorporate mindfulness and recovery techniques into your fitness routine to improve mental and physical well-being.",
        "image": "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  };
const servicesContainer = document.getElementById('services-section');
services.services.forEach(service => {

 
  $('#services-container').append(`
    <div class="col-md-6 col-xs-12 description-section-item">
      <div class="image-background">
        <img src="${service.image}" alt="${service.title}" class="img-fluid">
      </div>
      <div class="description-section-text">
        <div class="content">
          <h4>${service.title}</h4>
          <p>${service.description}</p>
        </div>
      </div>
    </div>
  `);
});