

const AddBlog = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [thumbnailUrl, setThumbnailUrl] = useState('');

	const user = useSelector(selectUser);
	const history = useHistory();

	const addBlog = (e) => {
		e.preventDefault();

		db.collection('blogs').add({
			id: id,
            title: title,
            author: author,
			content: content,
			publication: publication,
			published_on: published_on,
			
		});

		history.push('/');
	};

	return (
		<div className='addBlog'>
			<form>
				<div className='addBlog__details'>
					<h3>Blog Title</h3>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type='text'
					/>

					<h3>Blog Content</h3>
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						type='text'
					/>

					<h3>Blog Author</h3>
					<input
						value={author}
						onChange={(e) => setauthor(e.target.value)}
						type='text'
					/>
				</div>

				<Button
					variant='contained'
					type='submit'
					color='primary'
					onClick={addBlog}
					startIcon={<i class='fas fa-check'></i>}
				>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default AddBlog;