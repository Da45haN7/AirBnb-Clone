import React from "react";
import './home.css'
import Banner from "./Banner";
import Card from "./Card";

export default function Home(){
    return(
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card 
                    img="https://c4.wallpaperflare.com/wallpaper/165/64/39/grand-canyon-national-park-usa-wallpaper-preview.jpg"
                    title="Explore The Grand Canyon: A Majestic Display of Earth's Geological Marvels"
                    description="Experience awe-inspiring natural beauty and immerse yourself in the breathtaking landscapes of the Grand Canyon, a timeless wonder that showcases the Earth's remarkable geological history."
                />
                <Card 
                    img="https://c4.wallpaperflare.com/wallpaper/54/779/831/national-park-cathedral-rocks-tunnel-view-california-wallpaper-preview.jpg"
                    title="Yosemite National Park: Nature's Masterpiece Beckons Adventure and Serenity"
                    description="Discover the enchanting wonders of Yosemite National Park, where majestic waterfalls, towering granite cliffs, and pristine wilderness converge to create an awe-inspiring playground for nature lovers and outdoor enthusiasts."
                />
                <Card 
                    img="https://c4.wallpaperflare.com/wallpaper/1006/907/670/yellowstone-national-park-waterfall-wallpaper-preview.jpg"
                    title="Yellowstone National Park: Nature's Spectacle of Geothermal Marvels and Wildlife Splendors"
                    description="Embark on a captivating journey through Yellowstone National Park, where geothermal wonders, mesmerizing wildlife, and breathtaking landscapes await, offering an unparalleled experience in the heart of nature's grandeur."
                />
            </div>
            <div className="home__section">
                <Card 
                    img="https://c4.wallpaperflare.com/wallpaper/564/692/7/pink-lily-closeup-photography-wallpaper-preview.jpg"
                    title="San Francisco"
                    description="Visit San Francisco, a captivating blend of cultural diversity, iconic landmarks, and picturesque landscapes, offers an extraordinary urban experience unlike any other."
                    price="$99/night"
                />
                <Card 
                    img="https://c4.wallpaperflare.com/wallpaper/920/293/266/tower-block-new-york-usa-united-states-wallpaper-preview.jpg"
                    title="New York City"
                    description="Visit New York City, the bustling metropolis that never sleeps, pulsates with vibrant energy, iconic landmarks, world-class entertainment, and a melting pot of cultures, captivating visitors with its limitless possibilities."
                    price="$150/night"
                />
                <Card 
                    img="https://c4.wallpaperflare.com/wallpaper/314/778/449/1920x1080-px-los-angeles-anime-sailor-moon-hd-art-wallpaper-preview.jpg"
                    title="Los Angeles"
                    description="Visit Los Angeles, the entertainment capital of the world, radiates an irresistible allure with its palm-lined boulevards, sun-soaked beaches, iconic Hollywood landmarks, and a vibrant arts and cultural scene."
                    price="$120/night"
                />
            </div>
        </div>
    )
}