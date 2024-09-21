export default function Home() {
    const events = [
      {
        title: 'Opening Ceremony',
        date: '22nd September 2023',
        time: '10:00 AM onwards',
        description: 'Kickstarting ForkThis with a bang, setting the stage for Git.Set.Fork!',
        alignment: 'leftAligned',
      },
      {
        title: 'Teaching Git Basics',
        date: '22nd September 2023',
        time: '11:00 AM onwards',
        description: 'Master the art of branching, committing, and merging in a hands-on open source workshop.',
        alignment: 'rightAligned',
      },
      {
        title: 'Speaker Session',
        date: '22nd September 2023',
        time: '2:00 PM onwards',
        description: 'Get inspired as industry experts share their Git journey and insights.',
        alignment: 'leftAligned',
      },
      {
        title: 'Introduction to Game',
        date: '22nd September 2023',
        time: '4:30 PM onwards',
        description: 'Dive into the world of Git gamification, where learning meets fun.',
        alignment: 'rightAligned',
      },
      {
        title: 'Online Competition',
        date: '22nd-24th September 2023',
        time: '6:00 PM onwards',
        description: 'Compete head-to-head in Git challenges, proving your skills in real-time.',
        alignment: 'leftAligned',
      },
    ];
  
    return (
      <div className="h-screen w-full overflow-y-auto bg-black bg-[url('/mario2.png')] bg-cover">
        <h1 className="text-white text-6xl text-center mb-64 font-mario tracking-wider text-shadow-lg">
          Timeline for ForkThis
        </h1>
        <div className="flex flex-col gap-40 p-12">
          {events.map((event, index) => (
            <div
              key={index}
              className={`text-white max-w-[600px] w-full sm:w-1/2 p-5 bg-gray-900 bg-opacity-80 rounded-lg border-4 border-white shadow-lg ${event.alignment === 'rightAligned' ? 'self-end text-right' : 'self-start text-left'
                }`}
            >
              {/* Add brick image as a decorative element */}
              <div className="w-full h-12 mb-2" style={{ backgroundImage: 'url(/brick.png)', backgroundSize: 'contain', backgroundRepeat: 'repeat-x' }}>
                {/* Empty div to render the brick image */}
              </div>
              <h2 className="text-4xl mb-2 font-mario text-shadow-md">{event.title}</h2>
              <p className="text-2xl mb-1">{event.date}</p>
              <p className="text-2xl mb-1">{event.time}</p>
              <p className="text-xl">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  