
import {
	selectBlogAuthor,
	selectBlogContent,
	selectBlogId,
	selectBlogTitle
} from 



function App() {
	const dispatch = useDispatch();

	const blogId = useSelector(selectBlogId);
	const blogTitle = useSelector(selectBlogTitle);
	const blogContent = useSelector(selectBlogContent);
	const blogAuthor = useSelector(selectBlogAuthor);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			
		});
	}, []);

	return (
		<Router>
			<div className='app'>
				<Header />

				<Switch>
					<Route path={`/${blogId}/read`}>
						<BlogDisplay
							id={blogId}
							title={blogTitle}
							content={blogContent}
							author={blogAuthor}
						/>
					</Route>

					<Route path='/addBlog'>
						<AddBlog />
					</Route>

					<Route exact path='/'>
						<div className='app__page'>
							<Blogs />
						</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
