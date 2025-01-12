import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const projectsData = [
    {
      id: 1,
      title: "Leading CSI AQUAS",
      shortDescription: "Autonomous Harmful Algal Bloom (HAB) Detection and Eradication Robot",
      tags: ["CAD", "Electronics", "Autonomous", "Arduino", "Environment"],
      image: "/images/aquas/aquas-thumbnail.JPG",
      labels: ["Robotics", "Web Development"],
      fullContent: (
        <div>
          <section>
            <img src="/images/aquas/aquasBoat.JPG" alt="Boat" className="w-6/12" />
            <h3 className="font-semibold mt-4">Premise</h3>
            <ul className="list-disc ml-6">
                <li>Design a mass-manufacturable aquatic robot/boat that collects environmental data, collect water samples, and disperse research algecide to defeat HABs.</li>
                <li>Working alongside Dr. Joaqium Goes and the {" "}
                <a
                  href="https://www.thegoes-gomeslab.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
                  >
                  Goes-Gomes lab
                </a>
                {" "}to further their algecide by evaluating evaluate the efficacy of their experimental algecide treatments.</li>
              </ul>
            <h3 className="font-semibold mt-4">Responsibilities</h3>
            <ul className="list-disc ml-6">
                <li>Make high-level design choices for the robot to fulfill overarching goals by considering the flow of data channels. </li>
                <li>Coordinate with vehicle design team to implement internal electronics and instruments mounted outside the vehicle given their space constraints. </li>
                <li>Lead recruitment and training of new members on hardware, software, and electronics fundamentals. Manage and track weekly tasks. </li>
              </ul>
            <h3 className="font-semibold mt-4">Outcomes</h3>
            <ul className="list-disc ml-6">
                <li>Designed and tested low and high voltage systems to control the dispersal pumps and drivetrain motors using an RC receiver, Arduino, and a flight controller. </li>
                <li>Lead the implementation of an environmental data collection pipeline to collect and send data to a research database.</li>
                <li>CADed various components of the boat including a sensor buoy and height-adjustable bilge pump mounting clamps. </li>
              </ul>
            <h3 className="font-semibold mt-4">Technologies Used</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                EasyEDA
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Fusion360
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Go
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Arduino
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Raspberry Pi
              </span>
            </div>
          </section>
          <section>
            <h2 className="font-bold mt-4 text-xl">Overarching Design</h2>
            <img src="/images/aquas/aquasBD.png" alt="Block Diagram" className="w-7/12" />
            {/* Design decision table */}
            <table className="min-w-full bg-white border border-gray-400">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 border-b border-gray-400">
                      Design Goal
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 border-b border-gray-400 w-2/3">
                      Design Choice
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Control flexibility
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Implementing both manual control through RC for testing and autonomous control through a flight controller for research missions.
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Data durability
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Onboard data storage combined with continual wireless transmission to research database to ensure data is not lost.
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-purple-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Mass manufacturable
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 border-b border-gray-400">
                      Maximize usage of off-the-shelf parts, 3D-printed components, and easily programmable components to reduce cost and complexity (e.g. consumer RC and FPV components, microcontrollers, brushed DC motors).
                    </td>
                  </tr>
                </tbody>
            </table>
          </section>
          <section>
            <h2 className="font-bold mt-4 text-xl">Electronic systems</h2>
            <img src="/images/aquas/aquasSchematicF24.png" alt="Circuit Diagram" className="w-7/12" />
            <ul className="list-disc ml-6">
                <li>A common 14V power source powers the high-voltage motors and pumps, while a step-down module routes power to the low-voltage control system</li>
                <li>Arduino, Atlas Scientific EZO sensor array, PWM motor controllers, nifty pre-processing of receiver signals.</li>
            </ul>
            <SyntaxHighlighter
                language="cpp"
                style={solarizedlight} // You can change this to any Prism.js theme
                customStyle={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  background: '#f5f2f0',
                  fontSize: '0.8rem',
                }}
              >
                {`int readChannel(int channelInput, int minLimit, int maxLimit, int defaultValue) {
  int ch = pulseIn(channelInput, HIGH, 30000);
  if (ch < 100) return defaultValue;
  return map(ch, 1000, 2000, minLimit, maxLimit);
}

// Read the switch channel and return a boolean value
bool readSwitch(byte channelInput, bool defaultValue) {
  int intDefaultValue = (defaultValue) ? 100 : 0;
  int ch = readChannel(channelInput, 0, 100, intDefaultValue);
  return (ch > 50);
}`}
          </SyntaxHighlighter>
          <strong>Debugging and testing: </strong>
          <ul className="list-disc ml-6">
                <li>Used a soldered breakout board with hotswap electronics for modularity but encountered shorts from water leakage, motor jams, and faulty wiring.</li>
                <li>Replaced the breakout board with a fusebox and benchmarked max current draw to select a suitable stepdown module.</li>
                <li>Created a testing checklist with test circuits and multimeter readings to ensure all components were functional before deployment.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold mt-4 text-xl">Environmental Data Backend</h2>
            <p>Arduino reads incoming sensor data, RasPi reads this data through serial port, then sends data to remote server via 4G shield.</p>
            <SyntaxHighlighter
                language="go"
                style={solarizedlight} // You can change this to any Prism.js theme
                customStyle={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  background: '#f5f2f0',
                  fontSize: '0.8rem',
                }}
              >
                {`var queue [10]DataRow
var RWmutex *sync.RWMutex

func SetQueue(db *sql.DB) {
    RWmutex.Lock()
    defer RWmutex.Unlock()
    rows, err := db.Query("select * from AQUAS1 order by timestamp desc limit 10")
    if err != nil {
        return
    }
    index := 0
    for rows.Next() && index < 10 {
        var timestamp int64
        rows.Scan(&timestamp, &queue[index].Temp, &queue[index].Ph, &queue[index].Sal)
        myDate := time.Unix(timestamp, 0)
        queue[index].Time = myDate.Format(time.UnixDate)
        index++
    }
}

func GetQueue() [10]DataRow {
    RWmutex.RLock()
    defer RWmutex.RUnlock()
    return queue
}`}
          </SyntaxHighlighter>
          <ul className="list-disc ml-6">
                <li>Read-Write Mutex to protect a shared resource: the queue array, which stores the 10 most recent rows of sensor data.</li>
                <li>Ensure no inconsistent reading of the incoming data - lock until current write is complete </li>
                <li>Store data via SQL DB, read and displayed in frontend.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold mt-4 text-xl">CAD Components</h2>
            <img src="/images/aquas/aquasPumpCad.png" alt="Pump Clamps" className="w-7/12" />
            <ul className="list-disc ml-6">
                <li>Adjustable height mount for dispersal pumps.</li>
                <li>Heat inserts for screws, CADded using subtraction of pump model.</li>
            </ul>
          </section>
          <br></br>
          <h2 className="font-bold mt-4 text-xl">Full technical documentation: {" "}
            <a
                    href="https://drive.google.com/drive/folders/1ryR1xIvl53I18dHhbSsgC-XQLU9zjmJD?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
                    >
                    Link
                  </a>
          </h2> 
        </div>
      ),
    },
    {
      id: 2,
      title: "ROAM Lab MyHandSCI",
      shortDescription: "Orthosis for stroke and spinal cord injury patients.",
      tags: ["ML", "python", "pandas", "matplotlib", "data visualization", "stats", "signals", "CAD"],
      image: "/images/ROAM/roamPSD.png",
      labels: ["Robotics", "Data Science"],
      fullContent: (
        <div>
          <section>
            <img src="/images/ROAM/roamPSD.png" alt="PSD_Chart" className="w-6/12" />
            <h3 className="font-semibold mt-4">Premise</h3>
            <ul className="list-disc ml-6">
                <li>Help design improvements to the hardware and control software of the MyHandSCI, an assistive orthosis for spinal cord injury and stroke patients as a research assistant.</li>
              </ul>
            <h3 className="font-semibold mt-4">Responsibilities</h3>
            <ul className="list-disc ml-6">
                <li>Prototype and propose an original hardware modification to improve orthosis user experience. </li>
                <li>Help improve activation algorithm behind controlling the orthosis.</li>
                <li>Read up on provided studies and concepts from PIs, and discuss research in weekly check-ins. </li>
              </ul>
            <h3 className="font-semibold mt-4">Outcomes</h3>
            <ul className="list-disc ml-6">
                <li>Performed signal decomposition (Fast Fourier Transform) to analyze stroke patient EMG data patterns, applying MSE, cosine similarity, and averaging to distinguish patient actions, such as opening and closing a grasp, to control an orthosis. </li>
                <li>Used t-SNE and k-nearest neighbours to classify live, incoming EMG data for the patient as open, close, or relax signals.</li>
                <li>Computed power spectral densities and median frequency to identify downshifts in frequency, indicating fatigue.</li>
                <li>Designed a variable-radius pulley system that allows for customizable cable tensioning and retraction lengths to suit patient's liking. </li>
              </ul>
            <h3 className="font-semibold mt-4">Technologies Used</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Python
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                SciPy
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                NumPy
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Pandas
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Matplotlib
              </span>
              <span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
                Onshape
              </span>
            </div>
          </section>
          <section>
          <h2 className="font-bold mt-4 text-xl">Analyzing EMG Frequency Domains</h2>
          <strong> Signal decomposition: </strong>
          <SyntaxHighlighter
                language="python"
                style={solarizedlight} // You can change this to any Prism.js theme
                customStyle={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  background: '#f5f2f0',
                  fontSize: '0.8rem',
                }}
              >
                {`def preprocess(time, emg, sampling_rate):
    # First pass: round each time step to the nearest 1/sampling_rate. Ensure that there are no samples that 
    # have erroneous time steps that are too precise given sampling rate. 
    time = pd.to_numeric(time, errors='coerce').fillna(0)
    emg = pd.to_numeric(emg, errors='coerce').fillna(0)
    
    time = np.round(time*sampling_rate) / sampling_rate
    
    # Repackage
    time_domain = pd.DataFrame({"time_elapsed": time, 'emg': emg})
    
    cleaned_time_domain = time_domain.groupby("time_elapsed", as_index = False).mean()
    
    time_cleaned = cleaned_time_domain["time_elapsed"]
    emg_cleaned = cleaned_time_domain["emg"]
    
    return time_cleaned, emg_cleaned

def decompose(time, emg, sampling_rate):
    time_cleaned, emg_cleaned = preprocess(time, emg, sampling_rate) 
    time_cleaned = np.asarray(time_cleaned)
    emg_cleaned = np.asarray(emg_cleaned)
    
    # Perform FFT on the EMG signal
    emg_FFT = fft(emg_cleaned)
    
    # Calculate the number of samples and the spacing between them
    samples = len(time_cleaned)
    
    # Compute frequency bins based on the Nyquist frequency
    time_step = time_cleaned[1] - time_cleaned[0]
    frequency_bins = fftfreq(samples, time_step)
    
    positive_frequencies = frequency_bins[:samples // 2]
    positive_amplitudes = (2 / samples) * np.abs(emg_FFT[:samples // 2])  # Normalize and take magnitude
    
    return positive_frequencies, positive_amplitudes`}
          </SyntaxHighlighter>
          <ul className="list-disc ml-6">
                <li>Despite inconsistent or jittery sampling, preprocess data to fit ideal sampling frequency. </li>
                <li>Ensures the FFT will output frequencies up to half of Nyquist. </li>
          </ul>
          <br></br>
          <strong> Separating ground truth (GT) bins: </strong>
          <SyntaxHighlighter
                language="python"
                style={solarizedlight} // You can change this to any Prism.js theme
                customStyle={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  background: '#f5f2f0',
                  fontSize: '0.8rem',
                }}
              >
                {`def separate_gt_bins(dataset): 
    relax_sets = []
    open_sets = []
    close_sets = []
    
    current_gt = dataset.iloc[0]['gt']
    new_columns = dataset.columns.tolist()
    current_set = pd.DataFrame(columns = new_columns) 
    
    for index, row in tqdm(dataset.iterrows(), desc="separating bins"):
        if (row.loc['gt'] == current_gt):
            current_set = pd.concat([current_set, row.to_frame().T], ignore_index=True)
        else:
            # add a buffer to not add the "transition" noise. 
            if (current_gt == 0): 
                relax_sets.append(current_set)
            elif (current_gt == 1):
                open_sets.append(current_set)
            elif (current_gt == 2):
                close_sets.append(current_set)
            current_gt = row.loc['gt']
            current_set = pd.DataFrame(columns = new_columns) 
    
    return relax_sets, open_sets, close_sets`}
          </SyntaxHighlighter>
          <ul className="list-disc ml-6">
                <li>Patient EMG data was collected by having the patient perform a sequence of relaxes, opens, and closes, creating labeled signal data to train the orthosis activation classifier.</li>
                <li>Separates the time domain into these different actions using windowing, then decompose. </li>
          </ul>
          <br></br>
          <strong> PSD and mean frequency, benchmarking fatigue: </strong>
          <SyntaxHighlighter
                language="python"
                style={solarizedlight} // You can change this to any Prism.js theme
                customStyle={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  background: '#f5f2f0',
                  fontSize: '0.8rem',
                }}
              >
                {`def plot_psd_with_mean(frequency_bins, psd_value, title, x_lower, x_upper, y_lower, y_upper, trim, color):
    frequency_bins = np.array(frequency_bins) 
    psd_value = np.array(psd_value)      
    
    cumulative_psd = psd_value[trim:].cumsum()
    
    # Find median
    total_power = cumulative_psd[-1]
    half_total_power = 0.5 * total_power # location of the median. 
    
    median_index = np.where(cumulative_psd >= 0.5 * total_power)[0][0] # where returns tuple of arrays matching conditions 
    median_frequency = frequency_bins[median_index]
    print(median_frequency)
    
    plt.figure(figsize=(25, 10))
    plt.plot(frequency_bins, psd_value, color = color)
    plt.axvline(median_frequency, color="tab:green", linestyle='--', linewidth = 4, label=f'Median Frequency: {median_frequency} Hz')
    plt.ylim(y_lower,y_upper)
    plt.xlim(x_lower,x_upper)
    plt.xlabel("Frequency Bins")
    plt.ylabel("db/Hz")
    plt.title(title)
    plt.legend()
    plt.grid(True)
    plt.show()`}
          </SyntaxHighlighter>
          <div className="flex sm:flex-row flex-col items-center">
            <img src="/images/ROAM/roamMinEffort.png" alt="Min_effort" className="w-6/12" />
            <img src="/images/ROAM/roamMaxEffort.png" alt="Max_effort" className="w-6/12" />
          </div>
          <ul className="list-disc ml-6">
                <li>Computed the PSD and mean frequency of averages across 2 types of trials: rested muscles vs. fatigued muscles. Compared trials sampled at 50 Hz and 200 Hz </li>
                <li>Found approximately ~3 Hz downshift in frequency in fatigued, 200 Hz trials. This will be used to modify the classifier to account for fatigue.</li>
          </ul>
          </section>
          <section>
            <h2 className="font-bold mt-4 text-xl">Variable Radius Pulley:</h2>  
            <video className="w-full rounded-lg shadow-lg" controls>
              <source src="/images/ROAM/roamPulleyVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <br></br>
            <ul className="list-disc ml-6">
                <li>Created a 2 slider design that emphasized durability, and a 3 slider design that maximized extention. </li>
                <li>Test jig to benchmark retraction length and force of cable using both standard and extended pulleys, limit testing to try to break (and repeatedly break) the assembly to catch weakpoints.  </li>
                <li>E.g. weak 3D printed pins that were replaced with metal ones, jams/looseness solved by iterating to tweak lengths and thicknesses of the slider pieces.</li>
            </ul>
            <br></br>
            <div className="flex sm:flex-row flex-col items-center">
              <img src="/images/ROAM/roam2slider1.JPG" alt="Min_effort" className="w-3/12" />
              <img src="/images/ROAM/roam2slider2.JPG" alt="Max_effort" className="w-3/12" />
              <img src="/images/ROAM/roam3slider.JPG" alt="Max_effort" className="w-3/12" />
            </div>
            <img src="/images/ROAM/roam3sliderCad.png" alt="Min_effort" className="w-6/12" />
            <br></br>
            <ul className="list-disc ml-6">
                <li>CAD assembly to check margins and animate joints (sliders). </li>
            </ul>
          </section>
          <br></br>
          <h2 className="font-bold mt-4 text-xl">Full technical documentation: {" "}
            <a
                    href="https://drive.google.com/drive/folders/16aeht0bvV5tNa-OCeqyF9rbCM6SBzODY?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline decoration-purple-300 hover:decoration-purple-500 transition-colors"
                    >
                    Link
                  </a>
          </h2> 
        </div>
      ),
    },
    {
      id: 3,
      title: "Geochain.io",
      shortDescription: "Multiplayer, geography hot-potato game.",
      tags: ["Javascript", "WebSockets", "React", "Node.js", "Express.js", "HTML", "CSS"],
      image: "/images/geochain/geochainGameRoom.png",
      labels: ["Web Development"],
      fullContent: (
        <section>
  
        </section>
      ),
    },
    {
      id: 4,
      title: "Vectari (Now CredytU)",
      shortDescription: "Building LLM, AI classifiers for digital transaction complaints.",
      tags: ["LLMs", "OpenAI", "NLP", "BERT", "Python", "Numpy", "pandas", "t-SNE", "RF", "K-means"],
      image: "/images/vectari/vectariThumbnail",
      labels: ["Data Science"],
      fullContent: (
        <section>

        </section>
      ),
    },
  ];
  
  export default projectsData;