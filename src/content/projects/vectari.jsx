import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const vectariProject = {
	title: "Vectari (Now CredytU)",
	shortDescription:
		"Building LLM, AI classifiers for digital transaction complaints.",
	tags: [
		"LLMs",
		"OpenAI",
		"NLP",
		"HPO",
		"BERT",
		"Python",
		"Numpy",
		"pandas",
		"t-SNE",
		"RF",
		"K-means",
	],
	image: "/images/vectari/vectari3DKmeans.png",
	labels: ["Data Science"],
	fullContent: (
		<div>
			<section>
				<img
					src="/images/vectari/vectari3DKmeans.png"
					alt="K-means with tSNE"
					className="w-6/12"
				/>
				<h3 className="font-semibold mt-4">Premise</h3>
				<ul className="list-disc ml-6">
					<li>
						One of two interns place on a team to classify 2 types
						of bank complaints: digital transactions and mortgages.{" "}
					</li>
					<li>
						Startup sells software to flag bank vulnerabilities
						based on consumer complaint trends to prevent compliance
						violations.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Responsibilities</h3>
				<ul className="list-disc ml-6">
					<li>
						Use various ML algos and LLMs to build a classifier for
						digital transaction complaints.{" "}
					</li>
					<li>
						Work alongisde Harris, my co-intern in the team, helping
						with each other's code.{" "}
					</li>
					<li>
						Weekly check-ins with CTO for feedback and progress.
						Present researched findings at the end of the
						internship.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Outcomes</h3>
				<ul className="list-disc ml-6">
					<li>
						Developed algorithms to categorise bank complaints and
						identify compliance violations using traditional NLP,
						Hugging Face ML models, OpenAI LLMs, and CO-STAR and
						TIDD-EC prompting frameworks.{" "}
					</li>
					<li>
						Fine-tuned GPT 3.5 to push classification precisions for
						certain complaint categories to 96% out of a 5-category
						dataset, distilling from GPT 4.0.{" "}
					</li>
					<li>
						Worked on a more lightweight BERT model to classify
						complaints.{" "}
					</li>
					<li>
						Utilised Ray Tune for hyperparameter optimization,
						boosting SetFit classification accuracies from 75% to
						90%.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Technologies Used</h3>
				<div className="mt-3 flex flex-wrap gap-1.5">
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Python
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						pandas
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						NumPy
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						SciPy
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Matplotlib
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						TensorFlow
					</span>
				</div>
			</section>
			<section>
				<br></br>
				<h2 className="font-bold mt-4 text-xl">
					LLM cleanup and data exploration with K-means.
				</h2>
				<p>
					I used classic NLP techniques and an LLM to cleanup CFPB
					bank complaints which were low-quality: this preprocessing
					combo is used in all other projects at Vectari.
					<br />
					<br />
					These compliants are then vectorized, and I train a k-means
					clustering model on this data to group similar complaints
					together, finally, I use Latent Dirichlet Allocation (LDA)
					to identify topics within the clusters based on the most
					frequent terms.
				</p>
				<SyntaxHighlighter
					language="python"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`system = """You will receive a transcript of a phone call between a call center agent at a mortgage servicing company and a customer/borrower.
The transcription text is also low quality. These are calls about financial services and we have seen some text completely out of place.  For instance 'the first drug was fixed, and any drug after that was gonna be viral' should pretty clearly be
'the first rate was fixed, and any rate after that was going to be variable'.
Your job is to parse the text and using your natural language understanding and contextual awareness, please re-write the transcript and clean any grammar / things that do not make sense in financial use cases. After the response is generated, remove all full stops, commas, semicolons, colons, and quotation marks.
"""
def LLM_cleanup(transcript):
    messages = [
        {"role": "system", "content": system},
        {"role": "user", "content": f'"""{transcript}"""'}
    ]
    response = client.chat.completions.create(
        model=gpt_config['model'],
        messages=messages
    )
    LLM_cleaned_sample = response.choices[0].message.content
    return LLM_cleaned_sample

def NL_cleanup(LLM_cleaned_sample):
    for punctuation in string.punctuation:
        LLM_cleaned_sample = LLM_cleaned_sample.replace(punctuation, '')
    tokenized_sample = word_tokenize(LLM_cleaned_sample)
    stemmer = PorterStemmer()
    wnl = WordNetLemmatizer()
    removed_stopwords_sample = []
    for word in tokenized_sample:
        if word not in STOPWORD_SET and not word.isdigit():
            word = word.lower()
            wnl.lemmatize(word) if wnl.lemmatize(word).endswith('e') else stemmer.stem(word)
            removed_stopwords_sample.append(word)
    cleaned_sentence = " ".join(removed_stopwords_sample)
    return cleaned_sentence`}
				</SyntaxHighlighter>
				<br></br>
				<ul className="list-disc ml-6">
					<li>
						The LLM_cleanup function uses OpenAI's GPT model to
						clean and summarize low-quality transcripts.
					</li>
					<li>
						The NL_cleanup function further processes the text by
						removing punctuation, tokenizing, and applying stemming
						and lemmatization. Stopwords and digits are removed to
						focus on meaningful words
					</li>
				</ul>
				<br></br>
				<SyntaxHighlighter
					language="python"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`# Vectorize training data
vectorizer = CountVectorizer()
vectorizer.fit(X)
train_vect = vectorizer.transform(X)

# K-Means Clustering
num_clusters = 6
kmeans = KMeans(n_clusters=num_clusters, random_state=42)
kmeans.fit(train_vect)
clusters = kmeans.predict(train_vect)

# t-SNE for 2D Visualization
tsne = TSNE(n_components=2, random_state=42)
X_reduced = tsne.fit_transform(train_vect.toarray())
plt.scatter(X_reduced[:, 0], X_reduced[:, 1], c=clusters, cmap='viridis', alpha=0.6)
plt.title('Consumer Complaints Clustered (2D representation)')
plt.show()

# LDA for Topic Modeling
vectorizer = CountVectorizer(ngram_range=(1, 3), stop_words='english')
X = vectorizer.fit_transform(cleaned_dataset['Consumer complaint narrative'])
tfidf_transformer = TfidfTransformer()
X_tfidf = tfidf_transformer.fit_transform(X)
lda = LatentDirichletAllocation(n_components=5, random_state=0)
lda.fit(X_tfidf)

# Display Topics
def display_topics(model, feature_names, no_top_words):
    for topic_idx, topic in enumerate(model.components_):
        print("Topic %d:" % (topic_idx))
        print(" ".join([feature_names[i] for i in topic.argsort()[:-no_top_words - 1:-1]]))

display_topics(lda, vectorizer.get_feature_names_out(), no_top_words=10)`}
				</SyntaxHighlighter>
				<br></br>
				<ul className="list-disc ml-6">
					<li>
						A k-means clustering model is trained to group similar
						complaints into 6 clusters. t-SNE is used to reduce the
						dimensionality of the data for 2D visualization, helping
						to understand the clustering results.
					</li>
					<li>
						TF-IDF transformation is applied to weigh the importance
						of words in the documents. Latent Dirichlet Allocation
						(LDA) is used to identify 5 topics within the clusters,
						and the top 10 words for each topic are displayed.
					</li>
				</ul>
				<br></br>
			</section>
			<section>
				<h2 className="font-bold mt-4 text-xl">
					Hyperparameter optimization (HPO) with Ray Tune
				</h2>
				<SyntaxHighlighter
					language="python"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`# Put large datasets in the Ray object store
train_ds_ref = ray.put(train_ds)
test_ds_ref = ray.put(test_ds)

#Define the train_model function with necessary arguments
def train_model(config, train_ds_ref, test_ds_ref):
    model = SetFitModel.from_pretrained("sentence-transformers/paraphrase-mpnet-base-v2")

    trainer = SetFitTrainer(
        model=model,
        train_dataset=train_ds_ref,
        eval_dataset=test_ds_ref,
        loss_class=CosineSimilarityLoss,
        batch_size=config["batch_size"],
        num_iterations=config["num_iterations"],
        column_mapping={"cleaned_text": "text", "labels": "label"}
    )

    trainer.train()
    metrics = trainer.evaluate()

    return metrics['accuracy']`}
				</SyntaxHighlighter>
				<br></br>
				<ul className="list-disc ml-6">
					<li>
						Used SetFit, a HuggingFace model suited for few-shot
						learning for classification.
					</li>
					<li>
						After using Ray objects to batch training to reduce
						function size, used Ray Tune to distribute
						hyperparameter tuning across multiple trials to discover
						optimized hyperparameters.
					</li>
				</ul>
			</section>
			<section>
				<h2 className="font-bold mt-4 text-xl">
					LLM classifier and fine tuning.{" "}
				</h2>
				<br></br>
				<SyntaxHighlighter
					language="python"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`tools = [{
                "type": "function",
                "function": {
                    "name": "complaint_classifier",
                    "description": "select the correct category for an incoming complaint",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "category": {
                              "type": "string",
                              "enum": ["Fraud or scam", "Money was not available when promised", "Wrong amount charged or receive", "Incorrect/missing disclosures or info"]

                            },
                        },
                    },
                    "required": ["category"],
                },
            }]
            
  def fine_tune_classifier(new_transcript, json_file_name):
    messages = [
        {
            "role": "system",
            "content": generate_fine_tune_prompt(json_file_name)
        },
        {
            "role": "user",
            "content": f'""" Transcript to-be classified: \\n {new_transcript} """'
        }
    ]

    # Include the tool in the API call
    response = client.chat.completions.create(
        model=gpt_config['model'],
        messages=messages,
        tools=tools,
        tool_choice={"type": "function", "function": {"name": "complaint_classifier"}},
        temperature=0,
        top_p=0.2
    )

    # Extract the function call from the response
    if response.choices[0].message.tool_calls:
        function_call = response.choices[0].message.tool_calls[0].function
        if function_call.name == "complaint_classifier":
            # Parse the arguments
            import json
            arguments = json.loads(function_call.arguments)
            category = arguments.get("category")
            return category
        else:
            return response.choices[0].message.content
    else:
        return response.choices[0].message.content`}
				</SyntaxHighlighter>
				<br></br>
				<ul className="list-disc ml-6">
					<li>
						Originally used GPT 3.5 to analyze labeled training
						complaint transcripts, and classify an unlabeled
						complaint.
					</li>
					<li>
						2 detailed and structured prompting frameworks - CO-STAR
						and TIDD-EC - were used to defines the task,
						instructions, and constraints, ensuring the AI
						understands the context and requirements to classify the
						complaints.{" "}
					</li>
					<li>
						Improved the model by tooling and modifying parameters
						to stricten/constrain output.{" "}
					</li>
				</ul>
				<SyntaxHighlighter
					language="python"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`# Convert the input-output training data into standardized JSON format.
# Can change the JSON format for different structure and clarity
import json
def convert_to_jsonl(labeled_df, output_file):
  jsonl_data = []
  for index, row in labeled_df.iterrows():
    # Assuming the dataset is comma-separated
    user_message = row['Consumer complaint narrative']
    model_response = row["Issue"]
    conversation = [
    {'role': 'system', 'content': raw_prompt},
    {'role': 'user', 'content': user_message},
    {'role': 'assistant', 'content': model_response}]
    jsonl_data.append(json.dumps({"messages": conversation}))

  with open(output_file, 'w', encoding='utf-8') as outfile:
    outfile.write($n.join(jsonl_data))`}
				</SyntaxHighlighter>
				<ul className="list-disc ml-6">
					<li>
						Then, converted some selected, high-quality complaint
						transcript data into JSON format to fine-tune in OpenAI
						playground.{" "}
					</li>
					<li>
						The new classifier's F1 scores and overall accuracy on
						the test cases were much better than the previous
						"vanilla" prompt classifier.
					</li>
					<li>
						Complaint categories with more distinct/unique language
						were naturally easier to classify: e.g. "fraud or scam"
						complaints reaching a top precision of 96%.{" "}
					</li>
				</ul>
			</section>
			<section>
				<h2 className="font-bold mt-4 text-xl">
					BERT model to classify complaints:{" "}
				</h2>
				<br></br>
				<p>
					{" "}
					Bank complaints often contain complex language, financial
					jargon, and nuanced customer sentiments. BERT's
					bidirectional nature allows it to understand the context of
					words in a sentence by considering both the left and right
					context simultaneously. I wanted to fine tune the BERT model
					based on this bank complaint application.
				</p>
				<br></br>
				<SyntaxHighlighter
					language="python"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`# Load the BERT tokenizer
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased", do_lower_case=True)

# Tokenize the text data
def tokenize_text(text_series, max_length=256):
    tokenized_texts = text_series.apply(
        lambda x: tokenizer.encode(
            str(x),                  
            add_special_tokens=True, # Add [CLS] and [SEP] tokens for BERT 
            max_length=max_length,   # Truncate/pad to max_length
            truncation=True,         # Truncate long sequences
            padding='max_length'     # Pad short sequences
        )
    )
    return tokenized_texts

# Create attention masks
def create_attention_masks(sequences):
    masks = []
    for seq in sequences:
        mask = [float(token != 0) for token in seq]
        masks.append(mask)
    return masks`}
				</SyntaxHighlighter>
				<ul className="list-disc ml-6">
					<li>
						After cleaning the low-quality complaints with an LLM,
						tokenized text data using the BERT tokenizer, ensuring
						the input is compatible with the BERT model.
					</li>
					<li>
						Created attention masks to distinguish between actual
						tokens and padding
					</li>
				</ul>
				<br></br>
				<SyntaxHighlighter
					language="python"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`# Training loop
for epoch_i in range(epochs):
    print(f'Epoch {epoch_i + 1} / {epochs}')
    model.train()
    total_train_loss = 0

    for step, batch in enumerate(train_dataloader):
        b_input_ids, b_input_mask, b_labels = tuple(t.to(device) for t in batch)
        model.zero_grad()
        outputs = model(b_input_ids, attention_mask=b_input_mask, labels=b_labels)
        loss = outputs.loss
        total_train_loss += loss.item()
        loss.backward()
        torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
        optimizer.step()
        scheduler.step()

    avg_train_loss = total_train_loss / len(train_dataloader)
    print(f'Average training loss: {avg_train_loss:.2f}')`}
				</SyntaxHighlighter>
				<ul className="list-disc ml-6">
					<li>
						Trained the BERT model for sequence classification using
						a training loop over multiple epochs.
					</li>
					<li>
						Applied gradient clipping to prevent exploding
						gradients, ensuring stable training.
					</li>
					<li>
						Tracked and averaged the training loss across batches to
						monitor model performance during training.
					</li>
				</ul>
				<br></br>
				<img
					src="/images/vectari/vectariBERTPerformance.png"
					alt="BERT-Performance"
					className="w-6/12"
				/>
			</section>
			<h2 className="font-bold mt-4 text-xl">
				Final presentation:{" "}
				<a
					href="https://docs.google.com/presentation/d/1am6Zv3sxWqALaUhsjy8YzaZsJKurehfETtIDXvgW8Ss/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
				>
					Link
				</a>
			</h2>
			<h2 className="font-bold mt-4 text-xl">
				Engineering logs:{" "}
				<a
					href="https://docs.google.com/document/d/1sDD8cvhMrt4eLYHbqxYHbcyDKNMZV67mp7X5LGi41m8/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
				>
					Link
				</a>
			</h2>
		</div>
	),
};

export default vectariProject;
