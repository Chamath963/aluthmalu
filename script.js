// JavaScript for showing fish information
function showFishInfo(fish) {
    // Define fish data with detailed information
    const fishDetails = {
        tuna: "Tuna (Kelawalla / කෙලවල්ලා) is known for its firm texture and rich flavor. Perfect for grilling, searing, or in sushi!",
        sailfish: "Sailfish (Thalapath / තලපත්) is a versatile fish with a delicate texture. Great for steaks or curries.",
        mackerel: "Mackerel (Linna / ලින්නා) is a flavorful fish with high omega-3 content. Best enjoyed grilled or smoked.",
        sardine: "Sardine (Paraw / පරා පැටවු) is small but packed with flavor and nutrients. Ideal for frying or grilling.",
        snapper: "Snapper (Paraw / පරා ලොකු) has a mild, sweet taste. Perfect for roasting or in stews.",
        tilapia: "Tilapia (Thora / තෝරා) is a lean fish that works well for baking, frying, or grilling.",
        catfish: "Catfish (Balaya / බලයා) has a distinctive taste. Best prepared fried or in spicy curries.",
        grouper: "Grouper (Atawalla / ඇටවල්ලා) is a popular fish with a firm texture. Excellent for grilling or pan-searing.",
        bass: "Bass (Kakuluwa / කකුළුවන්) is light and mild. It's ideal for steaming or baking.",
        halibut: "Halibut (Hurulla / හුරුල්ලා) is firm yet flaky with a clean taste. Perfect for baking or grilling.",
        marlin: "Marlin (Salaya / සාලයා) has a firm texture and rich flavor. It's great for steaks or sushi.",
        barracuda: "Barracuda (Surapara / සුරාපරා) is known for its firm texture. Best enjoyed grilled or pan-fried.",
        cod: "Cod (Issa / ඉස්සා) is flaky and mild. Great for fish and chips or baked dishes.",
        trout: "Trout (Issa / ඉස්සා) is tender and mild, great for pan-frying or grilling.",
        yellowfin: "Yellowfin Tuna (Dalla / දැල්ලා) is perfect for sushi, grilling, or searing."
    };

    // Check if fish info exists and show an alert
    if (fishDetails[fish]) {
        alert(fishDetails[fish]);
    } else {
        alert("More information about this fish is coming soon!");
    }
}
