let app = require('./index.js');
// Mocking the './movie.js' module
jest.mock('./movie.js', () => ({
  getAllMovies: jest.fn(),
  getMovieById: jest.fn(),
  addNewMovie: jest.fn(),
}));

const { getAllMovies, getMovieById, addNewMovie } = require('./movie.js');

describe('Function Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  test('should return all movies', () => {
    const mockMovies = [
      { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
      { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
    ];

    // Set the mock implementation
    getAllMovies.mockReturnValue(mockMovies);

    // Call the function
    const result = getAllMovies();

    // Assertions
    expect(result).toEqual(mockMovies);
    expect(getAllMovies).toHaveBeenCalled();
  });
  test('should give Movie By Id', () => {
    const mockMovie = {
      id: 2,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
    };

    getMovieById.mockReturnValue(mockMovie);
    const result = getMovieById(2);

    expect(result).toEqual(mockMovie);
    expect(getMovieById).toHaveBeenCalled();
  });

  test('should add a new movie', () => {
    const newMovie = { id: 4, title: 'The Legend', director: 'Francis' };
    addNewMovie.mockReturnValue(newMovie);
    const result = addNewMovie();
    expect(result).toEqual(newMovie);
    expect(addNewMovie).toHaveBeenCalled();
  });
});
