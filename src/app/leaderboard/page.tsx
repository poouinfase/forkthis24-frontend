import React from "react";

const Leaderboard: React.FC = () => {
    return (
        <div className="flex flex-row items-start mt-3">
            {/* Left Image with Text */}
            <div style={{ position: 'relative' }}>
                <img 
                    src="/LeaderBoard/Cloud.webp" 
                    alt="Left Image"
                    style={{
                        width: '500px',  // Adjust width as needed
                        height: 'auto',  // Maintain aspect ratio
                        marginRight: '3rem', // Space between left image and leaderboard image
                        marginLeft: '3rem',
                        marginTop: '4rem'
                    }}
                />
                {/* Second Image Below the Cloud */}
                <img
                    src="/LeaderBoard/Mario.webp" 
                    alt="Second Image"
                    style={{
                        width: '75px',  // Adjust size for Mario image
                        height: 'auto',  // Maintain aspect ratio
                        marginRight: '3rem', // Keep consistent spacing
                        marginLeft: '15rem',
                        marginTop: '0rem' // Space between cloud and Mario image
                    }}
                />
                {/* Third Image Below Mario */}
                <img
                    src="/LeaderBoard/Block.webp" 
                    alt="Third Image"
                    style={{
                        width: '140px',  // Adjust size as per requirement
                        height: 'auto',  // Maintain aspect ratio
                        marginRight: '3rem', // Keep consistent spacing
                        marginLeft: '13rem',
                        marginTop: '-1rem' // Space between Mario and Block image
                    }}
                />
                {/* Fourth Image Below Block */}
                <div style={{ position: 'relative' }}>
                    {/* First Brick (Left) */}
                    <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Fourth Image"
                        style={{
                            width: '80px',  // Adjust size for the new image
                            height: 'auto',  // Maintain aspect ratio
                            marginRight: '3rem', // Keep consistent spacing
                            marginLeft: '0rem',
                            marginTop: '-1rem' // Space between Block and first Brick
                        }}
                    />
                    {/* First Brick (Right) */}
                    <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Fourth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the first brick
                            left: '76px', // Shift right from the first brick
                            top: '0', // Align vertically with the first brick
                        }}
                    />
                         <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '150px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '224px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '300px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '375px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '450px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '526px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '600px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '676px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '750px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '827px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />  <img
                    src="/LeaderBoard/Brick.webp" 
                    alt="Sixth Image Right"
                    style={{
                        width: '80px',
                        height: 'auto',
                        position: 'absolute', // Position relative to the third brick
                        left: '900px', // Shift right from the third brick
                        top: '0', // Align vertically with the third brick
                    }}
                />
                  <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '975px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1050px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1127px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1202px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1277px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1353px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1430px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                    
                </div>

                {/* Fifth Image Below First Brick */}
                <div style={{ position: 'relative' }}>
                    {/* Second Brick (Left) */}
                    <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Fifth Image"
                        style={{
                            width: '80px',  // Adjust size for the new image
                            height: 'auto',  // Maintain aspect ratio
                            marginRight: '3rem', // Keep consistent spacing
                            marginLeft: '0rem',
                            marginTop: '-1rem' // Space between first and second Brick
                        }}
                    />
                    
                    {/* Second Brick (Right) */}
                    <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Fifth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the second brick
                            left: '76px', // Shift right from the second brick
                            top: '0', // Align vertically with the second brick
                        }}
                    />
                         <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '150px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '224px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '300px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '375px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '450px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '526px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '600px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '676px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '750px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '827px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />  <img
                    src="/LeaderBoard/Brick.webp" 
                    alt="Sixth Image Right"
                    style={{
                        width: '80px',
                        height: 'auto',
                        position: 'absolute', // Position relative to the third brick
                        left: '900px', // Shift right from the third brick
                        top: '0', // Align vertically with the third brick
                    }}
                />
                  <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '975px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1050px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1127px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1202px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1277px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1353px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1430px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                 
                </div>

                {/* Sixth Image Below Second Brick */}
                <div style={{ position: 'relative' }}>
                    {/* Third Brick (Left) */}
                    <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image"
                        style={{
                            width: '80px',  // Adjust size for the new image
                            height: 'auto',  // Maintain aspect ratio
                            marginRight: '3rem', // Keep consistent spacing
                            marginLeft: '0rem',
                            marginTop: '-1.75rem' // Space between second and third Brick
                        }}
                    />
                    {/* Third Brick (Right) */}
                    <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '76px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                    <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '150px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '224px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '300px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '375px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '450px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '526px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '600px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '676px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '750px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '827px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />  <img
                    src="/LeaderBoard/Brick.webp" 
                    alt="Sixth Image Right"
                    style={{
                        width: '80px',
                        height: 'auto',
                        position: 'absolute', // Position relative to the third brick
                        left: '900px', // Shift right from the third brick
                        top: '0', // Align vertically with the third brick
                    }}
                />
                  <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '975px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1050px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1127px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1202px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1277px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1353px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                      <img
                        src="/LeaderBoard/Brick.webp" 
                        alt="Sixth Image Right"
                        style={{
                            width: '80px',
                            height: 'auto',
                            position: 'absolute', // Position relative to the third brick
                            left: '1430px', // Shift right from the third brick
                            top: '0', // Align vertically with the third brick
                        }}
                    />
                     
                </div>

                {/* Text Container */}
                <div 
                    style={{
                        position: 'absolute', 
                        top: '30%', // Center text vertically
                        left: '50%', // Center text horizontally
                        transform: 'translate(-50%, -50%)', // Adjust for exact centering
                        color: 'black', // Text color
                        textAlign: 'center', // Center text horizontally
                        fontFamily: "'Jersey 20', sans-serif" // Apply Jersey 20 font
                    }}
                >
                    <div 
                        style={{
                            fontSize: '30px', // Text size
                            fontWeight: 'bold', // Text weight
                            fontFamily: "'Jersey 20', sans-serif" // Apply Jersey 20 font to this text
                        }}
                    >
                        Your score: 230
                    </div>
                    <div 
                        style={{
                            fontSize: '30px', // Text size for second line
                            fontWeight: 'bold', // Text weight for second line
                            marginTop: '0rem', // Space between lines
                            fontFamily: "'Jersey 20', sans-serif" // Apply Jersey 20 font to this text
                        }}
                    >
                        Your rank: 13
                    </div>
                </div>
            </div>

            {/* Leaderboard Text */}
            <div 
                style={{
                    position: 'relative', 
                    marginTop: '-1rem', // Adjust if needed
                    marginLeft: '10rem',
                    fontSize: '110px', // Set the font size for the text
                    fontWeight: 'bold', // Bold text
                    fontFamily: "'Roboto Slab', serif", // Apply Roboto Slab font
                    color: 'white' // Text color
                }}
            >
                Leaderboard
            </div>
            <div 
    style={{
        width: '53%', // Full width of the container
        height: '550px', // Adjust height to fit 6 additional divs
        background: 'rgba(28, 32, 35, 1)', // Background color
        position: 'relative', // Ensure positioning
        marginTop: '8rem',
        marginLeft: '-45rem', // Adjust margins as needed
        borderRadius: '20px', // Rounded corners
        padding: '20px', // Padding for spacing inside the div
        border: '4px solid white', // White border added
        display: 'flex',
        flexDirection: 'column', // Align all elements in a vertical column
        justifyContent: 'flex-start' // Start stacking from the top
    }}
>
    {/* Row of 3 divs */}
    <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: '10px',
        marginTop: '0rem' // Space below the row of three divs
    }}>
        {/* Small div 1 */}
        <div style={{
            width: '250px', 
            height: '80px', 
            background: 'rgba(73, 75, 86, 1)', 
            borderRadius: '15px', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontFamily: "'Roboto Mono', monospace",
            fontSize: '30px',
            border: '3px solid black'
        }}>
            Rank
        </div>

        {/* Small div 2 */}
        <div style={{
            width: '250px', 
            height: '80px', 
            background: 'rgba(73, 75, 86, 1)', 
            borderRadius: '15px', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontFamily: "'Roboto Mono', monospace",
            fontSize: '30px',
            border: '3px solid black'
        }}>
            Team Name
        </div>

        {/* Small div 3 */}
        <div style={{
            width: '250px', 
            height: '80px', 
            background: 'rgba(73, 75, 86, 1)', 
            borderRadius: '15px', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontFamily: "'Roboto Mono', monospace",
            fontSize: '30px',
            border: '3px solid black'
        }}>
            Score
        </div>
    </div>

    {/* Column of 6 divs */}
    <div style={{
    display: 'flex',
    flexDirection: 'column', // Stack vertically
    gap: '15px' // Space between each div
}}>
    {['1 CodeCrafters 431', '1 CodeCrafters 431', '1 CodeCrafters 431', '1 CodeCrafters 431', '1 CodeCrafters 431', '1 CodeCrafters 431'].map((text, index) => {
        // Split text into components
        const [rank, teamName, score] = text.split(' ');
        return (
            <div key={index} style={{
                width: '755px', // Full width of the container
                height: '55px',
                background: index === 3 ? 'rgba(21, 184, 121, 1)' : 'rgba(77, 72, 72, 1)', // Green for the 4th div (index 3), default color for others
                borderRadius: '15px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                color: 'white',
                fontFamily: "'Roboto Mono', monospace",
                fontSize: '25px',
            }}>
                <div style={{ width: '33%', textAlign: 'center' }}>{rank}</div>
                <div style={{ width: '33%', textAlign: 'center' }}>{teamName}</div>
                <div style={{ width: '33%', textAlign: 'center' }}>{score}</div>
            </div>
        );
    })}
</div>

</div>


        
        </div>
        
    );
};

export default Leaderboard;